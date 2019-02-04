import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import FeedScreen from './FeedScreen';
import createPhilo from './CreatePhiloScreen';

const FeedStackNavigator = createStackNavigator({
    Feed: {screen: FeedScreen},
    createPhilo: {screen: createPhilo}
}, {
    initialRouteName: 'Feed',
    mode: "modal",
    headerLayoutPreset: 'center'
});

export default createAppContainer(FeedStackNavigator);