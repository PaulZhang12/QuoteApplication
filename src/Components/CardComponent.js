import React, { Component } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

class CardComponent extends Component{


    render(){

        return (
            <Card style={{borderColor: "#3EC094"}}>
                <CardItem header bordered style={styles.card}>
                    <Left>
                        <Thumbnail source={{
                            uri: "https://twistedsifter.files.wordpress.com/2016/04/lukas-furlan-exploring-dolomites-self-portrait-skywalker.jpg"
                        }}/>
                    </Left>
                    <Body style={{alignItems: "center"}}>
                    <Text>{this.props.author}</Text>
                    <Text style={styles.header}>{this.props.quote}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body style={styles.body}>
                    <Text>
                        {this.props.beginningText}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left style={styles.body}>
                        <FontIcon name={"hand-paper-o"} size={30} style={styles.icon}/>
                        <FeatherIcon name={"bookmark"} size={30} style={styles.icon}/>
                    </Left>
                    <Right>
                        <Ionicon name={"md-book"} size={32} style={styles.icon}/>
                    </Right>
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
        marginHorizontal: 5
    }
});
export default CardComponent;