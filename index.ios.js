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
} from 'react-native';

export class UselessTextInput extends Component {
  render () {
    return (
      <TextInput
        {...this.props}
        editable={true}
        maxLength={10}
      />
    );
  }
}

export class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={{padding: 10, backgroundColor: this.state.text}}>
        <UselessTextInput
          style={{height: 40}}
          multiline={true}
          numberOfLines={4}
          placeholder="input text"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>
          {this.state.text.split(' ').map((word) => word && '?').join(',')}
        </Text>
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
