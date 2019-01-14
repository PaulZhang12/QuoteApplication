/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ProfileScreen from './src/ProfileScreen.js';
import FeedScreen from './src/FeedScreen.js';

type Props = {};
class Profile extends Component<Props> {
  render() {
      return <ProfileScreen />
  }
}
class Feed extends Component<Props> {
  render() {
    return <FeedScreen />
  }
}

const TabNavigator = createBottomTabNavigator({
    Feed: Feed,
    Profile: Profile
})

export default createAppContainer(TabNavigator);


