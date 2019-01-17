import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

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


    onPressQuote = () => {
        alert("You pressed");
    }

    render() {
        return (
            <ScrollView style={styles.layout}>
                <View style={styles.navbar}>
                    <Icon name="ios-cog" size={35} color="grey" style={styles.settingsIcon}/>
                    <Text style={styles.title}>Paul Zhang</Text>
                    <Icon name="ios-send" size={35} color="grey" style={styles.sendIcon}/>
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
                            <Text>Your Quotes</Text>
                        </View>
                    </TouchableHighlight>
                    <Text>Bookmarked</Text>
                    <Text>Categories</Text>
                </View>
            </ScrollView>
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
        fontWeight: "700",
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
    }

});

export default ProfileScreen;