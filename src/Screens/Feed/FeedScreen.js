import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator, RefreshControl} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import CardComponent from '../../Components/CardComponent';
import {Button} from 'native-base';
import {loadFeedPhilos} from '../../Services/QuoteAPI';
import {connect} from 'react-redux';

class PhiloTitle extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>Philos</Text>
            </View>
        );
    }
}

class FeedScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <PhiloTitle/>,
            headerRight: (
                <Button transparent rounded onPress={() => navigation.navigate("createPhiloModal")} style={{alignSelf: "center", marginRight: 10}}>
                        <FeatherIcon name="edit" size={30} color="black"/>
                </Button>
            )
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            philoArray: []
        };
    }

    componentDidMount(){
        this.props.loadPhilos();
    }

    componentDidUpdate(prevProps){
        if(prevProps.philos != this.props.philos)
            this.onRefresh();
    }

    getCardArray(PhilosArray){
        let CardArray = [];
        PhilosArray.map(quoteObject => {
            CardArray.push(<CardComponent quote={quoteObject.quote} author={quoteObject.author}
                                          beginningText={(quoteObject.beginningText != null) ? quoteObject.beginningText: "My name is Paul"}/>);
        });
        this.setState({philoArray: CardArray});
    }

    onRefresh = () => {
        this.setState({refreshing: true});
        (this.props.philos.isLoading || this.props.philos.isLoading==null) ? <ActivityIndicator/> : this.getCardArray(this.props.philos.philos);
        this.setState({refreshing: false});
    };


    render() {
        return (
            <SafeAreaView style={styles.layout}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                            />
                    }
                >
                    {this.state.philoArray}
                </ScrollView>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({
    layout: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    title: {
        fontSize: 30,
        color: "#ffcd5e",
        fontFamily: "Helvetica Neue",
        paddingBottom: 5,
        fontWeight: "normal"
    }
});

const mapStateToProps = (state) => {
    return {philos: state};
};

const mapDispatchToProps = dispatch => {
    return {
        loadPhilos: () => dispatch(loadFeedPhilos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);