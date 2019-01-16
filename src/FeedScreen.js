import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class FeedScreen extends Component {
    render() {
        return (
                <ScrollView style={styles.layout}>
                    <View style={styles.navbar}>
                        <Icon name="ios-cog" size={35} color="grey" style={styles.settingsIcon}/>
                        <Text style={styles.title}>Repara</Text>
                        <Icon name="ios-send" size={35} color="grey" style={styles.sendIcon}/>
                    </View>
                </ScrollView>
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