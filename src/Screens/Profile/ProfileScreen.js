import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, ActivityIndicator, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Button} from 'native-base';
import CardComponent from '../../Components/CardComponent';
import helpers from "../../Services/QuoteAPI";

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
                    <FeatherIcon name="edit" size={35} color="black"/>
                </Button>
            ),
            headerLeft: (
                <Button transparent rounded onPress={() => navigation.navigate('Settings')} style={{alignSelf: "center", marginLeft: 10}}>
                    <Icon name="ios-cog" size={35} color="black"/>
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
            isLoading: true,
            philo: "Hello my name is Paul"
        };

        this.onPressQuote = this.onPressQuote.bind(this);
        this.onPressBookmark = this.onPressBookmark.bind(this);
        this.onPressCategories = this.onPressCategories.bind(this);


    }

    pressSettings(){
        this.props.navigation.navigate('Settings');
    }

    async componentDidMount(){
        let arr = await helpers.API();
        this.setState({
            quoteArray: this.getCardArray(arr),
            isLoading: false,
            tab: "Your Quote"
        });
        this.props.navigation.setParams({ Name: this.state.name });
    }

    getCardArray(PhilosArray){
        let CardArray = [];
        PhilosArray.map(quoteObject => {
          CardArray.push(<CardComponent quote={quoteObject.quote} author={quoteObject.author} beginningText={this.state.philo.substring(0,200) + "..."}/>);
        });
        return CardArray;
    }

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
                return this.state.quoteArray.slice(0, 5);
            case "Bookmarked":
                return this.state.quoteArray.slice(5,10);
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
        if(this.state.isLoading){
            return(
                <View style={{display: "flex", alignItems: "center"}}>
                    <ActivityIndicator/>
                </View>
            )
        }
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

                        <TouchableOpacity
                            onPress = {this.onPressQuote}>
                            <Text ref={component => this.quoteText = component} style={styles.bottomText, {color: '#3EC094'}}>Your Quotes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {this.onPressBookmark}>
                            <Text ref={component => this.bookmarkText = component} style={styles.bottomText}>Bookmarked</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {this.onPressCategories}>
                            <Text ref={component => this.categoriesText = component} style={styles.bottomText}>Your Categories</Text>
                        </TouchableOpacity>
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
        fontWeight: "600",
        fontSize: 15,
        color: "black"
    },
    bottomNavbar: {
        flex: 1,
        width: 100+"%",
        height: 30,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D3D3D3"
    },
    bottomText: {
        fontFamily: "Helvetica Neue",
        color: "black"
    },

});

export default ProfileScreen;