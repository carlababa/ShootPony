/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import Start from './components/Start';
 import { AppRegistry } from 'react-native';

 export default class ShootPony extends Component {
   render() {
     return (
       <Start />
     );
   }
 }

AppRegistry.registerComponent('ShootPony', () => ShootPony);
