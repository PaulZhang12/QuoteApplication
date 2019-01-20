import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';


const ProfileStackNavigator = createStackNavigator({
    Main: {screen: ProfileScreen},
    Settings: {screen: SettingsScreen}
}, {
    initialRouteName: 'Main',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: 'false'
    }
});


export default createAppContainer(ProfileStackNavigator);