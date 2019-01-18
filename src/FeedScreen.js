import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import CardComponent from './CardComponent';

class FeedScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10", header = {
            headers: {
                'X-Mashape-Key': 'LkFW0i7YOvmshxY4qtCZ1tj8ZpRkp1sozU6jsnvG7rkx7gS2iX',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json()
                .then((responseJSON) => {
                        this.setState({
                            quoteArray: responseJSON,
                            isLoading: false
                        });
                    }
                )
            )
            .catch((err) => console.log(err));
    }

    getCardArray(){
        let CardArray = [];
        this.state.quoteArray.map(quoteObject => {
            CardArray.push(<CardComponent quote={quoteObject.quote} author={quoteObject.author}/>);
        });
        return CardArray;
    }


    render() {
        if(this.state.isLoading){
            return(
                <View style={{display: "flex", alignItems: "center"}}>
                    <Text>Loading</Text>
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.layout}>
                    <View style={styles.navbar}>
                        <FeatherIcon name="edit" size={35} color="black" style={styles.settingsIcon}/>
                        <Text style={styles.title}>Philos</Text>
                        <Icon name="ios-send" size={35} color="black" style={styles.sendIcon}/>
                    </View>
                </View>

                <ScrollView>
                    {this.getCardArray()}
                </ScrollView>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({
    layout: {
        display: "flex"
    },
    title: {
        fontSize: 30,
            color: "#ffcd5e",
            fontFamily: "Helvetica Neue",
            paddingTop: 5
    },
    navbar: {
            width: 100 + "%",
            height: 60,
            display: "flex",
            flexDirection: "row",
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "grey",
            alignItems: "baseline",
            justifyContent: "space-between"
    },
    settingsIcon: {
        marginLeft: 10
    },
    sendIcon:{
        marginRight: 10
    }
});


export default FeedScreen;