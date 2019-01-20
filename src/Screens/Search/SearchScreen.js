import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SearchScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.layout}>
                    <View style={styles.searchContainer}>
                        <Icon name="ios-search" size={25} style={styles.searchIcon}/>
                        <TextInput placeholder="Find Your Philos" style={styles.searchText}></TextInput>
                    </View>
                </View>
            </SafeAreaView>
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
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },

    searchIcon: {
        marginLeft: 10,
        color: "grey"
    },

    searchText: {
        fontSize: 15,
        marginLeft: 10,
        paddingTop: 10
    }

});

export default SearchScreen;