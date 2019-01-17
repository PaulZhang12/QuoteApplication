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
                    <TextInput placeholder="Find Quotes!" style={styles.searchText}></TextInput>
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
        display: "flex",
        width: 90+"%",
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 30,
        flexDirection: "row"
    },

    searchIcon: {
        marginLeft: 10,
        color: "grey"
    },

    searchText: {
        fontSize: 18,
        paddingTop: 6
    }

});

export default SearchScreen;