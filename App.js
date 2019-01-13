/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import ProfileScreen from './src/ProfileScreen.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <ProfileScreen />
  }
}
