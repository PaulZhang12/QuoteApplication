import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ProfileScreen from './ProfileScreen.js';
import FeedScreen from './FeedScreen.js';
import SearchScreen from './SearchScreen';
import ActivityScreen from './ActivityScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


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

export default createAppContainer(TabNavigator);