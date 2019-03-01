import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import createPhilo from '../Feed/createPhiloModal';


const ProfileStackNavigator = createStackNavigator({
    Main: {screen: ProfileScreen},
    Settings: {screen: SettingsScreen},
    createPhilo: {screen: createPhilo}
}, {
    initialRouteName: 'Main',
    headerLayoutPreset: "center"
});

const ModalStack = createStackNavigator({
    ProfileStack: {screen: ProfileStackNavigator},
    createPhiloModal: {screen: createPhilo}
}, {
    mode: "modal",
    headerMode: "none"
});


export default createAppContainer(ModalStack);