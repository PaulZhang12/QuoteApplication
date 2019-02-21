import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Modal, TouchableHighlight} from "react-native";


class createPhiloModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal
                    styles={{marginTop: 200}}
                    animationType="slide"
                    transparent={false}
                    visible={!this.props.visible}
                    onRequestClose={() => {
                    }}>
                    <View>
                        <Text>Hello!</Text>
                        <TouchableHighlight
                            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        )
    };
}

const styles = StyleSheet.create({

});

export default createPhiloModal;