import React, { Component } from 'react';
import { AppRegistry, StatusBar, View } from 'react-native';
import Start from './components/Start';

export default class ShootPony extends Component {
  render() {
    return (
       <View>
         <StatusBar
           backgroundColor={'rgba(253, 200, 223, 0.8)'}
           barStyle="light-content"
         />
         <Start />
      </View>
    );
  }
}

AppRegistry.registerComponent('ShootPony', () => ShootPony);
