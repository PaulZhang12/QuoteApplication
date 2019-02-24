import ProfileStackNavigator from './Screens/Profile/ProfileStackNavigator';
import FeedStackNavigator from './Screens/Feed/FeedStackNavigator';
import SearchStackNavigator from './Screens/Search/SearchStackNavigator';
import ActivityStackNavigator from './Screens/Activity/ActivityStackNavigator';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import createPhiloModal from './Screens/Feed/createPhiloModal'

import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import React, {Component} from "react";

class ProfileStack extends Component<Props> {
    render() {
        return <ProfileStackNavigator />
    }
}
class FeedStack extends Component<Props> {
    render() {
        return <FeedStackNavigator />
    }
}
class SearchStack extends Component<Props> {
    render() {
        return <SearchStackNavigator />
    }
}

class ActivityStack extends Component<Props> {
    render() {
        return <ActivityStackNavigator />
    }
}




const TabNavigator = createBottomTabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='home' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='search' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    },
    Activity: {
        screen: ActivityStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FeatherIcon name='inbox' color={tintColor} size={32} style={{marginTop: 8}}/>
            )
        }
    },
    Profile: {
        screen: ProfileStack,
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
