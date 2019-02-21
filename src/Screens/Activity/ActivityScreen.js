import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


class ActivityScreen extends Component {

    render() {
        return  (
            <View style={styles.view}>
                <Button title={"hello world?"} onPress={()=>alert("chungus")}>
                </Button>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "green",
        height: 30+"%",
        width: 50+"%",

    },
    text: {
        color: "red",
    }

});

export default ActivityScreen;