import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ActivityScreen from './ActivityScreen';

const ActivityStackNavigator = createStackNavigator({
    Activity: {screen: ActivityScreen}
}, {
    initialRouteName: 'Activity',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: 'false'
    }
});


export default createAppContainer(ActivityStackNavigator);