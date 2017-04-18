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
  TextInput,
  ScrollView,
} from 'react-native';

import MeIcon from './app/images/me.jpeg';

export class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <ScrollView horizontal={true}>
        <Text>Scroll me down</Text>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Text>Scroll me down</Text>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Text>Scroll me down</Text>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Text>Scroll me like</Text>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Text>Scroll me confident</Text>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>
        <Image source={MeIcon} style={styles.thumbnail}/>

      </ScrollView>
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
