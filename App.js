/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StatusBar, Text, StyleSheet} from 'react-native';
import Barang from './Component/Barang';
import Header from './Component/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar />
        <Header data='SELAMAT DATANG' name='created by @jooprima' />
        <Barang />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});
