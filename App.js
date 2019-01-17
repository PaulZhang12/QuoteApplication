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
            tabBarLabel:  ' ',
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='home' color={tintColor} size={30} />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='search' color={tintColor} size={30} />
            )
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='inbox' color={tintColor} size={30} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name='person-outline' color={tintColor} size={30} />
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#3EC094',
        inactiveTintColor: 'black'
    }
});

export default createAppContainer(TabNavigator);


