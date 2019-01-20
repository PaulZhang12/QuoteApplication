import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import FeedScreen from './FeedScreen';

const FeedStackNavigator = createStackNavigator({
    Feed: {screen: FeedScreen}
}, {
    initialRouteName: 'Feed',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: 'false'
    }
});

export default createAppContainer(FeedStackNavigator);