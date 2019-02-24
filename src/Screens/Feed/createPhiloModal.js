import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TextInput, Platform, Dimensions} from "react-native";
import Modal from 'react-native-modal';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import Icon from 'react-native-vector-icons/Feather';


class createPhiloModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }


    render() {
        const deviceWidth = Dimensions.get('window').width;
        const deviceHeight = Platform.OS === 'ios'
            ? Dimensions.get("window").height
            : ExtraDimensions.get("REAL_WINDOW_HEIGHT");

        return (
                <Modal
                    isVisible={this.state.visible}
                    backdropOpacity={0.1}
                    onBackButtonPress={() => this.props.navigation.goBack()}
                    style={styles.wrapper}
                    deviceWidth = {deviceWidth}
                    deviceHeight = {deviceHeight}
                    transparent={false}
                >
                    <View style={styles.topView}>
                        <Icon name="x" size={30} color="black" style={{marginRight: "auto"}}/>
                        <Text style={{position: "absolute"}}>Hello!</Text>
                    </View>
                </Modal>
        )
    };
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    topView: {
        width: 100+"%",
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});

export default createPhiloModal;