import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./ProfileScreen";


class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.searchContainer}>
                    <Icon name="ios-search" size={35} style={styles.searchIcon}/>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    layout: {
        display: "flex",
        alignItems: "center"
    },

    searchContainer: {
        width: 90+"%",
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 30
    },

    searchIcon: {
        marginLeft: 10,
        color: "grey"
    }

});

export default SearchScreen;