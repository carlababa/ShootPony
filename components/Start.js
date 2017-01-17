import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  TouchableOpacity,
  // ListView,
} from 'react-native';
// import Game from './Game';

const screen = Dimensions.get('window');
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
    width: 200,
    height: 200,
  },
  lifesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 10,
  },
  counter: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 20,
    left: 10,
    fontSize: 40,
  },
  heart: {
    width: 40,
    height: 40,
  },
});

export default class Start extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      lifes: [1, 2, 3, 4, 5],
      points: 0,
      showStart: true,
    };
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.5,
    }).start();
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
    this.setState({ showStart: false });
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }],
    };
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../images/bgImage.png')}>
          <TouchableOpacity
            onPressIn={() => this.handlePressIn()}
            onPressOut={() => this.handlePressOut()}
          >
            {this.state.showStart &&
              <Animated.View style={animatedStyle}>
                <Image style={styles.start} source={require('../images/play.png')} />
              </Animated.View>
            }
          </TouchableOpacity>
          <Text style={styles.counter}>{this.state.points}</Text>
          <View style={styles.lifesContainer}>
            {this.state.lifes.map(item => <Image key={item} style={styles.heart} source={require('../images/heart.png')} />)}
          </View>
        </Image>
      </View>
    );
  }
}
