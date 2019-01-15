import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <View>
                <View style={styles.navbar}>
                    <Icon name="md-create" size={40} color="white" style={styles.writeIcon}/>
                    <Text style={styles.title}>Paul Zhang</Text>
                    <Icon name="md-cog" size={40} color="grey" style={styles.writeIcon}/>
                </View>
                <View style={styles.profileFlex}>
                    <Image style={styles.profileIcon}
                           source ={{
                               uri:
                                   "https://qvcc.edu/wp-content/uploads/2017/03/Sun-PNG-Image.png"
                           }}/>
                </View>
            </View>
        )
        };
}

// TODO: Move styles to it's own folder and import it into each file that needs these styles
const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    title: {
        fontSize: 30,
        color: "#ffcd5e",
        fontFamily: "Helvetica Neue"
    },
    navbar: {
        width: 100 + "%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "black",
        alignItems: "center",
        justifyContent: "space-between"
    },
    writeIcon: {
        marginRight: 5
    },
    profileIcon: {
        flex: 1,
        width: 400,
        height: 400,
        margin: 30
    },
    profileFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        height: 50 + "%"
    },
    profileName: {
        fontWeight: "bold",
        fontSize: 35,
        color: "black",
        fontFamily: "georgia",
        marginTop: 50,
        marginRight: 10
    },
    quoteText: {
        fontSize: 20
    },
    quoteTextBox: {
        height: 50,
        width: 80+"%",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "grey",
        alignSelf: "center",
        marginTop: 50
    }

})

export default ProfileScreen;