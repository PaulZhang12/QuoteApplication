/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import TabNavigator from './src/TabNavigator';
import configureStore from './src/store';
import {Provider} from 'react-redux';

import React, {Component} from "react";

class App extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store={configureStore()}>
                <TabNavigator>
                </TabNavigator>
            </Provider>
        )
    }

}

export default App;