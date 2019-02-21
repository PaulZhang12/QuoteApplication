import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView} from "react-native";


class ActivityScreen extends Component {

    render() {
        return (
            <View style={styles.view}>
                <Text>Hello World</Text>
            </View>
        )
    };

}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'blue',
        height: 100+'%',

    }

});

export default ActivityScreen;