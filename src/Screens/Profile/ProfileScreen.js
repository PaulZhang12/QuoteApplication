import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Button} from 'native-base';
import CardComponent from '../../Components/CardComponent';
import {loadFeedPhilos} from "../../Services/QuoteAPI";
import {connect} from 'react-redux';

class ProfileTitle extends Component{
    render(){
        return(
          <View>
              <Text style={styles.title}>Paul Zhang</Text>
          </View>
        );
    }
}


class ProfileScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <ProfileTitle/>,
            headerRight: (
                <Button transparent rounded onPress={() => navigation.navigate('createPhilo')} style={{alignSelf: "center", marginRight: 10}}>
                    <FeatherIcon name="edit" size={30} color="black"/>
                </Button>
            ),
            headerLeft: (
                <Button transparent rounded onPress={() => navigation.navigate('Settings')} style={{alignSelf: "center", marginLeft: 10}}>
                    <Icon name="ios-cog" size={30} color="black"/>
                </Button>
            )

        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "Paul Zhang",
            profilePic:  "https://twistedsifter.files.wordpress.com/2016/04/lukas-furlan-exploring-dolomites-self-portrait-skywalker.jpg",
            followers: 205,
            stories: 10,
            upvotes: 355,
            philo: "Hello my name is Paul",
            refreshing: true,
            philoArray: [],
            tab: 'Your Quote'
        };

        this.onPressQuote = this.onPressQuote.bind(this);
        this.onPressBookmark = this.onPressBookmark.bind(this);
        this.onPressCategories = this.onPressCategories.bind(this);


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
        (this.props.philos.isLoading || this.props.philos.isLoading==null) ? null : this.getCardArray(this.props.philos.philos);
        this.setState({refreshing: false});
    };


    onPressQuote(){
        this.setState({tab: "Your Quote"});
        this.quoteText.setNativeProps({style: {
                color: '#3EC094'
            }});
        this.bookmarkText.setNativeProps({style: {
                color: 'black'
            }});
        this.categoriesText.setNativeProps({style: {
                color: 'black'
            }});

    }

    onPressBookmark(){
        this.setState({tab: "Bookmarked"});
        this.quoteText.setNativeProps({style: {
            color: 'black'
            }});
        this.bookmarkText.setNativeProps({style: {
            color: '#3EC094'
            }});
        this.categoriesText.setNativeProps({style: {
            color: 'black'
            }});
    }

    onPressCategories(){
        this.setState({tab: "Categories"});
        this.quoteText.setNativeProps({style: {
                color: 'black'
            }});
        this.bookmarkText.setNativeProps({style: {
                color: 'black'
            }});
        this.categoriesText.setNativeProps({style: {
                color: '#3EC094'
            }});
    }

    handleProfileView(){
        switch(this.state.tab){
            case "Your Quote":
                return this.state.philoArray.slice(0, 5);
            case "Bookmarked":
                return this.state.philoArray.slice(5);
            case "Categories":
                return <Image style={styles.profileIcon}
                       source ={{
                           uri:
                           this.state.profilePic
                       }}
                       resizeMode="cover"/>
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.layout}>
                    <View style={styles.stats}>
                        <View style={styles.indStats}>
                            <Text style={styles.statText}>Followers</Text>
                            <Text style={styles.statText}>{this.state.upvotes}</Text>
                        </View>
                        <View style={styles.indStats}>
                            <Text style={styles.statText}>Stories Written</Text>
                            <Text style={styles.statText}>{this.state.stories}</Text>
                        </View>
                        <View style={styles.indStats}>
                            <Text style={styles.statText}>Upvotes</Text>
                            <Text style={styles.statText}>{this.state.upvotes}</Text>
                        </View>
                    </View>
                    <View style={styles.profileFlex}>
                        <Image style={styles.profileIcon}
                               source ={{
                                   uri:
                                       this.state.profilePic
                               }}
                               resizeMode="cover"/>
                    </View>
                    <View style={styles.bottomNavbar}>

                        <TouchableWithoutFeedback
                            onPress = {this.onPressQuote}>
                            <Text ref={component => this.quoteText = component} style={[styles.bottomText, {color: '#3EC094'}]}>Your Quotes</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress = {this.onPressBookmark}>
                            <Text ref={component => this.bookmarkText = component} style={styles.bottomText}>Bookmarked</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress = {this.onPressCategories}>
                            <Text ref={component => this.categoriesText = component} style={styles.bottomText}>Your Categories</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    {this.handleProfileView()}
                </ScrollView>
            </SafeAreaView>
        )
        };
}





// TODO: Move styles to it's own folder and import it into each file that needs these styles
const styles = StyleSheet.create({
    layout: {
        display: "flex"
    },
    title: {
        fontSize: 30,
        color: "#ffcd5e",
        fontFamily: "Helvetica Neue",
        paddingBottom: 5,
        fontWeight: "normal"
    },
    navbar: {
        width: 100 + "%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "grey",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    settingsIcon: {
        color: "black",
        marginLeft: 10
    },
    profileIcon: {
        flex: 1,
        height: 400,
        width: 400
    },
    profileFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    stats: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingTop: 5,
    },
    indStats: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    statText: {
        fontFamily: "Helvetica Neue",
        fontWeight: "300",
        fontSize: 15,
        color: "black"
    },
    bottomNavbar: {
        flex: 1,
        width: 100+"%",
        height: 40,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth
    },
    bottomText: {
        fontFamily: "Helvetica Neue",
        color: "black"
    },

});

const mapStateToProps = (state) => {
    return {philos: state};
};

const mapDispatchToProps = dispatch => {
    return {
        loadPhilos: () => dispatch(loadFeedPhilos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);