/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import TabNavigator from './src/TabNavigator.js'
import SettingsScreen from './src/SettingsScreen.js'
import CreatePhiloScreen from './src/CreatePhiloScreen.js'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, {Component} from "react";

class Main extends Component<Props> {
    render() {
        return <TabNavigator />
    }
}

class Settings extends Component<Props> {
    render() {
        return <SettingsScreen />
    }
}

class CreatePhilo extends Component<Props> {
    render() {
        return <CreatePhiloScreen />
    }
}

const App = createStackNavigator({
    Main: {screen: Main},
    CreatePhilo: {screen: CreatePhilo},
    Settings: {screen: Settings}
});


export default createAppContainer(App);
