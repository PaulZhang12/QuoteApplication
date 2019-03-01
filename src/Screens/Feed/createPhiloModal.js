import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Platform, Dimensions, Keyboard} from "react-native";
import Modal from 'react-native-modal';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'native-base';
import {CheckBox} from 'react-native-elements';
import {addPhilo} from "../../Services/QuoteAPI";
import {connect} from "react-redux";

class createPhiloModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            privateChecked: false,
            discussionChecked: false
        };

        this.titleTextChange = this.titleTextChange.bind(this);
        this.descriptionTextChange = this.descriptionTextChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    closeModal = () => this.props.navigation.goBack();

    titleTextChange = (text) => {
        this.setState({titleText: text})
    };

    descriptionTextChange = (text) => {
        this.setState({descriptionText: text})
    };

    submit = () => {
        this.props.dispatchAddPhilo({quote: this.state.titleText, author: "Paul Zhang", beginningText: this.state.descriptionText});
        this.closeModal();
    };


    render() {
        const deviceWidth = Dimensions.get('window').width;
        const deviceHeight = Platform.OS === 'ios'
            ? Dimensions.get("window").height
            : ExtraDimensions.get("REAL_WINDOW_HEIGHT");

        return (
                <Modal
                    isVisible={true}
                    backdropOpacity={0.1}
                    onBackButtonPress={() => this.closeModal()}
                    style={styles.wrapper}
                    swipeDirection="down"
                    onSwipe={() => this.closeModal()}
                    deviceWidth = {deviceWidth}
                    deviceHeight = {deviceHeight}
                    transparent={false}
                >
                    <View style={styles.topView}>
                        <Button transparent rounded onPress={() => this.closeModal()} style={styles.exitIcon}>
                            <Icon name="x" size={35} color="black"/>
                        </Button>
                        <Text style={styles.title}>Create Philos</Text>
                    </View>
                        <TextInput onChangeText={(text) => this.titleTextChange(text)} value={this.state.titleText} underlineColorAndroid="transparent" placeholderTextColor="grey"
                                   placeholder="Start with a Value, Saying, or Title" style={styles.titleInput}></TextInput>
                        <TextInput onChangeText={(text) => this.descriptionTextChange(text)} value={this.state.descriptionText} underlineColorAndroid="transparent" placeholderTextColor="grey" multiline={true}
                                   placeholder="When/Where did You Develop this Perspective? Tell a Story or Give a Vivid Description" style={styles.bodyInput}></TextInput>
                        <CheckBox fontFamily="Helvetica Neue" left title='Start A Discussion' checked={this.state.discussionChecked} containerStyle={{width: 50+"%",
                            marginBottom: 10}} onPress={() => this.setState({discussionChecked: !this.state.discussionChecked})} checkedColor="#3EC094"/>
                        <CheckBox fontFamily="Helvetica Neue" left title='Private Philos' checked={this.state.privateChecked} containerStyle={{width: 50+"%",
                            marginBottom: 15}} onPress={() => this.setState({privateChecked: !this.state.privateChecked})} checkedColor="#3EC094"/>
                        <Button transparent style={{alignSelf: "center"}} onPress={() => this.submit()}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Button>
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
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
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
        marginBottom: 10
    },
    exitIcon: {
        marginRight: 'auto',
        marginLeft: 5,
        marginTop: 5
    },
    title: {
        fontSize: 25,
        color: "#ffcd5e",
        fontFamily: "Helvetica Neue",
        position: "absolute"
    },
    titleInput: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "grey",
        width: 90+"%",
        height: 60,
        textAlignVertical: "top",
        marginBottom: 10,
        fontSize: 18
    },
    bodyInput: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "grey",
        width: 90+"%",
        height: 50+"%",
        textAlignVertical: "top",
        fontSize: 14,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 20,
        color: "#ffcd5e",
        fontFamily: "Helvetica Neue",
        alignSelf: "center"
    }
});

const mapStateToProps = (state) => {
    return {philos: state};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddPhilo: (philo) => dispatch(addPhilo(philo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(createPhiloModal);