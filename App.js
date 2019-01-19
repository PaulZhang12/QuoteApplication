/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import ProfileScreen from './src/ProfileScreen.js';
import FeedScreen from './src/FeedScreen.js';
import SearchScreen from './src/SearchScreen';
import ActivityScreen from './src/ActivityScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import React, {Component} from "react";

class Profile extends Component<Props> {
    render() {
        return <ProfileScreen />
    }
}
class Feed extends Component<Props> {
    render() {
        return <FeedScreen />
    }
}
class Search extends Component<Props> {
    render() {
        return <SearchScreen />
    }
}

class Activity extends Component<Props> {
    render() {
        return <ActivityScreen />
    }
}

const App = createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='home' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='search' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='inbox' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name='person-outline' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#3EC094',
        inactiveTintColor: 'black'
    }
});

export default createAppContainer(App);
