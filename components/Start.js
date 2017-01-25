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
import Game from './Game';

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
});

export default class Start extends Component {
  constructor(...args) {
    super(...args);

    this.points = 0;
    this.poneys = [...Array(6).keys()];
    const pony = [<TouchableOpacity onPress={() => this.increasePoints()} style={{ paddingLeft: Math.random() * screen.width }}><Game /></TouchableOpacity>];
    this.state = {
      lifes: [1, 2, 3, 4, 5],
      showStart: true,
      pony,
    };
  }


  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  startPress() {
    this.setState({ showStart: false });
  }

  // renderPony() {
  //   this.poneys = this.poneys.slice(0, -1);

    // if (this.poneys.length === 0) {
    //   clearTimeout(this.myInterval);
    // }

  //   return (
  //     <View style={{ position: 'absolute', top: 0, paddingLeft: Math.random() * screen.width }}>
  //       <Game />
  //     </View>
  //   );
  // }


  renderPony(i) {
    this.setState({
      pony: [
        ...this.state.pony,
        <TouchableOpacity
          key={i}
          onPress={() => this.increasePoints()}
          style={{ position: 'absolute', top: -40, paddingLeft: Math.random() * screen.width }}>
          <Game />
        </TouchableOpacity>,
      ],
    });
  }

  startLoop() {
    this.myInterval = setTimeout(i => this.renderPony(i), 1500);
  }

  increasePoints() {
    this.points = this.points + 1;
    const removePony = this.state.pony.pop();
    this.setState({ pony: removePony });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../images/bgImage.png')}>
          {!this.state.showStart &&
            <View style={styles.gameContainer}>
              {this.startLoop()}
              {this.state.pony}
            </View>
          }
          <TouchableOpacity onPress={() => this.startPress()}>
            {this.state.showStart && <Image style={styles.start} source={require('../images/play.png')} />}
          </TouchableOpacity>
          <Text style={styles.counter}>{this.points}</Text>
          <View style={styles.lifesContainer}>
            {this.state.lifes.map(item => <Image key={item} style={styles.heart} source={require('../images/heart.png')} />)}
          </View>
        </Image>
      </View>
    );
  }
}
