import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput} from "react-native";


class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.searchContainer}>

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
        height: 50,
        borderWidth: 1,
        marginTop: 10
    }


});

export default SearchScreen;