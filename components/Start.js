/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('window');
export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../images/pond.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    height: screen.height,
    resizeMode: 'contain',
  },
});

AppRegistry.registerComponent('Start', () => Start);
