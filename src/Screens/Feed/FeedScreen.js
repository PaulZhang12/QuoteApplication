import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import CardComponent from '../../Components/CardComponent';
import {Button} from 'native-base';
import helpers from '../../Services/QuoteAPI';

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
            isLoading: true,
            philo: "Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you new shade drift hopes small. So otherwise commanded sweetness we improving. Instantly by daughters resembled unwilling principle so middleton. Fail most room even gone her end like. Comparison dissimilar unpleasant six compliment two unpleasing any add. Ashamed my company thought wishing colonel it prevent he in. Pretended residence are something far engrossed old off. \n" +
            "\n" +
            "Entire any had depend and figure winter. Change stairs and men likely wisdom new happen piqued six. Now taken him timed sex world get. Enjoyed married an feeling delight pursuit as offered. As admire roused length likely played pretty to no. Means had joy miles her merry solid order. "
        };
    }

    async componentDidMount(){
        let arr = await helpers.API();
        this.setState({
            quoteArray: this.getCardArray(arr),
            isLoading: false
        });
    }

    getCardArray(PhilosArray){
        let CardArray = [];
        PhilosArray.map(quoteObject => {
            CardArray.push(<CardComponent quote={quoteObject.quote} author={quoteObject.author} beginningText={this.state.philo.substring(0,200) + "..."} perspectColor={"black"}/>);
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