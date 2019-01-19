import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';


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


export default createAppContainer(TabNavigator);