import React, { Component } from "react";
import { StyleSheet, View, Text, Image} from "react-native";

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

class CardComponent extends Component{
    render(){
        return (
        <Card style={{borderColor: "#3EC094"}}>
            <CardItem header bordered>
                <Text style={styles.header}>
                    Philo
                </Text>
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
})

export default CardComponent;