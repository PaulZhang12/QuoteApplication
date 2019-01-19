import React, { Component } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

class CardComponent extends Component{


    render(){

        return (
        <Card style={{borderColor: "#3EC094"}}>
            <CardItem header bordered style={styles.card}>
                <Text>{this.props.author}</Text>
                <Text style={styles.header}>{this.props.quote}</Text>
            </CardItem>
            <CardItem>
                <Body style={styles.body}>
                    <Text>
                        Hello my name is Paul. I like pineapples. Victor Wei cannot read his memory for his computer.
                        Ethan Haezebroeck loves, loves the good grass. Hwan is my brother. Mitchell hermon is a weird
                        fella, but idk he's taught me a lot about his race. 
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Body style={styles.body}>
                    <FontIcon name={"hand-paper-o"} size={30}/>
                    <FeatherIcon name={"bookmark"} size={30}/>
                </Body>
            </CardItem>
        </Card>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "400",
        color: "black",
        fontSize: 16
    },

    card:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },

    body: {
        display: "flex",
        flexDirection: "row"
    },

    icon: {
        flex: 1,
    }
});

export default CardComponent;