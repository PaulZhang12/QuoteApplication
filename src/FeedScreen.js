import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';


class FeedScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.layout}>
                    <View style={styles.navbar}>
                        <FeatherIcon name="edit" size={35} color="black" style={styles.settingsIcon}/>
                        <Text style={styles.title}>Philos</Text>
                        <Icon name="ios-send" size={35} color="black" style={styles.sendIcon}/>
                    </View>
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