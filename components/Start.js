import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
// import Game from './Game';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
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
  pony: {
    width: 90,
    height: 90,
  },
});

export default class Start extends Component {
  constructor(...args) {
    super(...args);

    this.points = 0;
    this.animatedValue = [];
    this.ponyCount = 0;
    this.duration = 3500;

    this.state = {
      firstTime: true,
      lifes: [],
      showStart: true,
      poneys: [],
    };
  }

  createNextPony() {
    const pony = { key: this.ponyCount, animatedValue: new Animated.Value(1), randomPosition: Math.random() * (screen.width - 90) };
    this.ponyCount += 1;

    if (this.state.lifes.length === 0) {
      clearTimeout(this.timer);
      this.setState({
        poneys: [],
        firstTime: false,
      });
      return;
    }

    if (this.points % 10 === 0) {
      this.duration = this.duration - (this.duration * 10 / 100);
    }

    this.setState({
      poneys: [...this.state.poneys, pony],
    });

    Animated.sequence([Animated.timing(
      pony.animatedValue,
      {
        toValue: screen.height + 90,
        duration: this.duration,
        easing: Easing.linear,
      },
    )]).start(() => {
      this.setState({
        poneys: this.state.poneys.filter(item => pony.key !== item.key),
        lifes: this.state.lifes.slice(0, -1),
      });
    });

    this.startTimer();
  }

  startTimer() {
    this.timer = setTimeout(() => this.createNextPony(), 1500);
  }


  startPress() {
    this.points = 0;
    this.setState({
      showStart: false,
      lifes: [...Array(5).keys()],
    }, this.createNextPony);
  }

  removePony(key) {
    this.points += 1;
    this.setState({
      lifes: [...this.state.lifes, this.state.lifes.length - 1],
      poneys: this.state.poneys.filter(item => key !== item.key),
    });
  }

  renderGame() {
    const animations = this.state.poneys.map((pony) => {
      const animatedStyle = {
        padding: 20,
        transform: [{ translateY: pony.animatedValue }],
      };

      return (
        <TouchableOpacity onPress={() => this.removePony(pony.key)} key={pony.key} style={{ position: 'absolute', top: -90, paddingLeft: pony.randomPosition }}>
          <Animated.View style={animatedStyle}>
            <Image style={styles.pony} source={require('../images/poney.gif')} />
          </Animated.View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.backgroundImage}>
        {!this.state.showStart &&
          <View style={styles.gameContainer}>
            {animations}
          </View>
        }
        <TouchableOpacity onPress={() => this.startPress()}>
          {this.state.showStart && <Image style={styles.start} source={require('../images/play.png')} />}
        </TouchableOpacity>
        <Text style={styles.counter}>{this.points}</Text>
        <View style={styles.lifesContainer}>
          {this.state.lifes.map((item, i) => <Image key={item[i]} style={styles.heart} source={require('../images/heart.png')} />)}
        </View>
      </View>
    );
  }

  renderRestart() {
    return (
      <TouchableOpacity onPress={() => this.startPress()}>
        <Image style={styles.start} resizeMode="contain" source={require('../images/reload.png')} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../images/bgImage.png')}>
          {this.state.lifes.length || this.state.firstTime ? this.renderGame() : this.renderRestart()}
        </Image>
      </View>
    );
  }
}
