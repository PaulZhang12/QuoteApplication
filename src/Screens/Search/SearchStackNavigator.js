import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SearchScreen from './SearchScreen';

const SearchStackNavigator = createStackNavigator({

   Search: {screen: SearchScreen}

}, {
    initialRouteName: 'Search',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: 'false'
    }
});

export default createAppContainer(SearchStackNavigator);