import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SearchScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.layout}>
                    <View style={styles.searchContainer}>
                        <Icon name="ios-search" size={25} style={styles.searchIcon}/>
                        <TextInput placeholder="Find Your Philos" style={styles.searchText}></TextInput>
                    </View>
                    <View style={styles.categoriesView}>
                        <Text style={styles.categoriesText}>Categories</Text>
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
        borderWidth: StyleSheet.hairlineWidth,
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
    },
    categoriesView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: 90+"%",
        height: 200
    },
    categoriesText: {
        color: "black",
        fontSize: 30
    }

});

export default SearchScreen;