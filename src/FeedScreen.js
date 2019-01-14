import React, { Component } from "react";
import {View, Text} from "react-native";

class FeedScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, height: 100+"%", width: 100+"%", alignItems: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 30}}>
                    Feed Screen!
                </Text>
            </View>
        )
    };
}


export default FeedScreen;