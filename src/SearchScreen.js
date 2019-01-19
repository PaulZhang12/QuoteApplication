import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.layout}>
                    <View style={styles.searchContainer}>
                        <Icon name="ios-search" size={35} style={styles.searchIcon}/>
                        <TextInput placeholder="Find A Philo" style={styles.searchText}></TextInput>
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
        marginTop: 30,
        flexDirection: "row",
        alignItems: "baseline"
    },

    searchIcon: {
        marginLeft: 10,
        color: "grey"
    },

    searchText: {
        fontSize: 18,
        paddingTop: 5,
        marginLeft: 10
    }

});

export default SearchScreen;