import React, { Component } from "react"
import { AppRegistry, View, Image, StyleSheet, Text, TextInput, SafeAreaView,} from 'react-native'

class CategoryComponent extends Component {
    render () {
        return (
            <View style={styles.centering}>
                <Image
                    source={{uri: this.props.picture}}
                    style={styles.monkey}/>
                <Text style={styles.subtext}>{
                    this.props.words
                }</Text>
            </View>
        )
    }
}






const styles = StyleSheet.create ({
        monkey: {
            width: 100,
            height: 100,
            marginTop: 100,
        },
        subtext: {
            color: "black",
            fontSize: 30,
            fontFamily: "Helvetica Neue",
            fontWeight: "300",


        },
        centering: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "red",
            marginLeft: 10,
            marginLeft: 10
        }
    }
);

export default CategoryComponent;
