import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Button,
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      dataSource: ds.cloneWithRows(['li', 'xufei', 'is', 'a', 'beauty']),
      title: '',
    };
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          title: responseJson.title,
        });
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Text style={{backgroundColor: 'red'}}>{this.state.title}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(r) => <Text>{r}</Text>}
        />
        <Button onPress={this.getMoviesFromApiAsync} title="submit"/>
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
