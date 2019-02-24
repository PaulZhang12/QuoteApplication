import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import FeedScreen from './FeedScreen';
import philosModal from './createPhiloModal';


const FeedStackNavigator = createStackNavigator({
    Feed: {screen: FeedScreen},

}, {
    initialRouteName: 'Feed',
    headerLayoutPreset: 'center'
});

const ModalStack = createStackNavigator({
    Feed: {screen: FeedStackNavigator},
    createPhiloModal: {screen: philosModal}
}, {
    mode: "modal",
    headerMode: "none"
});

export default createAppContainer(ModalStack);