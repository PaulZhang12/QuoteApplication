import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import CardComponent from '../../Components/CardComponent';
import {Button} from 'native-base';
import helpers from '../../Services/QuoteAPI';
import {connect} from 'react-redux';

class PhiloTitle extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>Philos</Text>
            </View>
        );
    }
}

class FeedScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <PhiloTitle/>,
            headerRight: (
                <Button transparent rounded onPress={() => navigation.navigate('createPhilo')} style={{alignSelf: "center", marginRight: 10}}>
                        <FeatherIcon name="edit" size={35} color="black"/>
                </Button>
            )
        };
    };


    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount(){
        const arr = await helpers.API();
        this.setState({
            quoteArray: this.getCardArray(arr),
            isLoading: false
        });
    }

    getCardArray(PhilosArray){
        let CardArray = [];
        PhilosArray.map(quoteObject => {
            CardArray.push(<CardComponent quote={quoteObject.quote} author={quoteObject.author} beginningText={"My name is Paul"}/>);
        });
        return CardArray;
    }


    render() {
        if(this.state.isLoading){
            return(
                <View style={{display: "flex", alignItems: "center"}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    {this.state.quoteArray}
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
        paddingBottom: 5,
        fontWeight: "normal"
    }
});



export default FeedScreen;