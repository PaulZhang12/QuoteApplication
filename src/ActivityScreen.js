import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


class ActivityScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} />
        )
    };
}

const styles = StyleSheet.create({


});

export default ActivityScreen;