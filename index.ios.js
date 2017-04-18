var MOCKED_MOVIES_DATA = [
  { title: '标题', year: '2015'},
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import meIcon from './app/images/me.jpeg';

export default class AwesomeProject extends Component {
  render() {
    const movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image source={meIcon} style={styles.thumbnail} />
        <Text >center text</Text>
        <View >
          <Text>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    flex: 1,
  },
  centerText: {
    flex: 1,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
