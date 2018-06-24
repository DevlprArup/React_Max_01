/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placename: ''
  }

  placenameChangeHandler = (e) =>{
    //alert(e)
    this.setState({
      placename: e
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.textInput}
            placeholder='type here..' 
            // secureTextEntry={true}
            onChangeText={this.placenameChangeHandler}
            value={this.state.placename} />
        </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    flex: 0.9,
    height: 60,
    backgroundColor: '#ccc',
    borderColor: '#f00',
    paddingLeft: 25
  }
});
