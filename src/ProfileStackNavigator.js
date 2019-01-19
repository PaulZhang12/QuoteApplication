import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';


class Main extends Component<Props> {
    render() {
        return <ProfileScreen />
    }
}

class Settings extends Component<Props> {
    render() {
        return <SettingsScreen />
    }
}

const ProfileStackNavigator = createStackNavigator({
    Main: {screen: Main},
    Settings: {screen: Settings}
}, {
    initialRouteName: 'Main',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: 'false'
    }
});


export default createAppContainer(ProfileStackNavigator);