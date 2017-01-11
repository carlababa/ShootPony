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
  TouchableOpacity,
} from 'react-native';

const screen = Dimensions.get('window');
export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../images/bgImage.png')}>
          <TouchableOpacity>
            <Image style={styles.start} source={require('../images/play.png')} />
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    height: screen.height,
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    width: screen.width / 2,
    height: screen.width / 2,
  },
});

AppRegistry.registerComponent('Start', () => Start);
