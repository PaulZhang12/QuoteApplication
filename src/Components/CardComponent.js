import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

class CardComponent extends Component{

    constructor(props){
        super(props);
        this.onPressPerspect = this.onPressPerspect.bind(this);
    }

    onPressPerspect(){
        this.perspectIcon.setNativeProps({style: {
                color: '#3EC094'
            }});
        this.perspectText.setNativeProps({style: {
            color: '#3EC094'
            }});
    }

    render(){

        return (
            <Card>
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
                    <Left>
                        <TouchableOpacity
                        onPress = {this.onPressPerspect}
                        style={styles.body}>
                            <FontIcon ref = {component => this.perspectIcon = component} name={"hand-paper-o"} size={32} style={styles.icon}/>
                            <Text ref = {component => this.perspectText = component} style={styles.perspectText}>Perspect</Text>
                        </TouchableOpacity>
                    </Left>
                    <Right style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                        <FeatherIcon name={"bookmark"} size={32} style={styles.icon}/>
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
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginHorizontal: 5
    },
    perspectText: {
        fontSize: 16,
        marginLeft: 5
    }
});
export default CardComponent;