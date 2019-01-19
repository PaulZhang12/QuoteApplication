import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableHighlight, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'native-base';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Paul Zhang",
            profilePic:  "https://twistedsifter.files.wordpress.com/2016/04/lukas-furlan-exploring-dolomites-self-portrait-skywalker.jpg",
            followers: 205,
            stories: 10,
            upvotes: 355
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.layout}>
                    <View style={styles.navbar}>
                        <Button transparent rounded onPress={() => this.props.navigation.navigate('Settings')}>
                        <Icon name="ios-cog" size={35} color="grey" style={styles.settingsIcon}/>
                        </Button>
                        <Text style={styles.title}>Paul Zhang</Text>
                        <Button transparent rounded>
                        <Icon name="ios-send" size={35} color="grey" style={styles.sendIcon}/>
                        </Button>
                    </View>
                    <View style={styles.stats}>
                        <View style={styles.indStats}>
                            <Text style={styles.statText}>Followers</Text>
                            <Text style={styles.statText}>{this.state.upvotes}</Text>
                        </View>
                        <View style={styles.indStats}>
                            <Text style={styles.statText}>Stories Written</Text>
                            <Text style={styles.statText}>{this.state.stories}</Text>
                        </View>
                        <View style={styles.indStats}>
                            <Text style={styles.statText}>Upvotes</Text>
                            <Text style={styles.statText}>{this.state.upvotes}</Text>
                        </View>
                    </View>
                    <View style={styles.profileFlex}>
                        <Image style={styles.profileIcon}
                               source ={{
                                   uri:
                                       this.state.profilePic
                               }}
                               resizeMode="cover"/>
                    </View>
                    <View style={styles.bottomNavbar}>

                        <TouchableHighlight
                            onPress = {this.onPressQuote}>
                            <View>
                                <Text style={styles.bottomText}>Your Quotes</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.bottomText}>Bookmarked</Text>
                        <Text style={styles.bottomText}>Categories</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
        };
}





// TODO: Move styles to it's own folder and import it into each file that needs these styles
const styles = StyleSheet.create({
    layout: {
        display: "flex"
    },
    title: {
        fontSize: 30,
        color: "#ffcd5e",
        fontFamily: "Helvetica Neue"
    },
    navbar: {
        width: 100 + "%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "grey",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    settingsIcon: {
        color: "black",
        marginLeft: 5
    },
    sendIcon:{
        color: "black",
        marginRight: 5
    },
    profileIcon: {
        flex: 1,
        height: 400,
        width: 400
    },
    profileFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: 10
    },
    stats: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingTop: 5,
    },
    indStats: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    statText: {
        fontFamily: "Helvetica Neue",
        fontWeight: "600",
        fontSize: 15,
        color: "black"
    },
    bottomNavbar: {
        flex: 1,
        width: 100+"%",
        height: 30,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D3D3D3"
    },
    bottomText: {
        fontFamily: "Helvetica Neue",
        color: "black"
    },

});

export default ProfileScreen;