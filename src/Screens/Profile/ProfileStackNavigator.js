import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import createPhilo from '../Feed/CreatePhiloScreen';


const ProfileStackNavigator = createStackNavigator({
    Main: {screen: ProfileScreen},
    Settings: {screen: SettingsScreen},
    createPhilo: {screen: createPhilo}
}, {
    initialRouteName: 'Main',
    headerLayoutPreset: "center"
});


export default createAppContainer(ProfileStackNavigator);