/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  // Dimensions,
  // Easing,
} from 'react-native';

// const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  pony: {
    width: 90,
    height: 90,
  },
});

export default class Game extends Component {
  // constructor(...args) {
  //   super(...args);
  //
  //   this.state = {
  //     lifes: [1, 2, 3, 4, 5],
  //   };
  // }
  //
  // componentWillMount() {
  //   this.animatedValue = new Animated.Value(1);
  // }

  // componentDidMount() {
  //   Animated.stagger(500,
  //     this.state.lifes.map(() => Animated.timing(this.animatedValue, {
  //       toValue: screen.height,
  //       duration: 2000,
  //       easing: Easing.linear,
  //     }))).start();
  // }

  render() {
    const animatedStyle = {
      transform: [{ translateY: this.animatedValue }],
    };

    return (
      <View>
        <Animated.View style={animatedStyle}>
          <Image style={styles.pony} source={require('../images/poney.gif')} />
        </Animated.View>
      </View>
    );
  }
}
