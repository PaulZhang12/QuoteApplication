import React, { Component } from "react";
import { StyleSheet, View, Text} from "react-native";

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.navbar}>
                 <Text style={styles.title}>Profile</Text>
                </View>
            </View>
        )
        };
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        width: 100 + "%",
        height: 100 + "%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    navbar: {
        width: 100 + "%",
        height: 75,
        alignItems: "center",
        backgroundColor: "#c4c4c4"
    }
})

export default ProfileScreen;