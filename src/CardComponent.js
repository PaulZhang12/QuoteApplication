import React, { Component } from "react";
import { StyleSheet, View, Text, Image} from "react-native";

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

class CardComponent extends Component{


    render(){

        return (
            <Card style={{borderColor: "#3EC094"}}>
                <CardItem header bordered style={styles.card}>
                    <Text style={styles.header}>{this.props.quote}</Text>
                    <Text>{this.props.author}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "400",
        color: "black"
    },

    card:{
        display: "flex",
        flexDirection: "column"
    }
});

export default CardComponent;