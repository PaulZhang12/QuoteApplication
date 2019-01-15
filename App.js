/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ProfileScreen from './src/ProfileScreen.js';
import FeedScreen from './src/FeedScreen.js';
import SearchScreen from './src/SearchScreen';
import ActivityScreen from './src/ActivityScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

type Props = {};
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

const TabNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({tintColor}) => (
                <FeatherIcon name='home' size={24} />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => (
                <FeatherIcon name='search' size={24} />
            )
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarLabel: 'Activity',
            tabBarIcon: ({tintColor}) => (
                <FeatherIcon name='inbox' size={24} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcon name='person-outline' size={24} />
            )
        }
    }
})

export default createAppContainer(TabNavigator);


