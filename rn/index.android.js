/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

const Toast = NativeModules.MyToast;

export default class rn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          Welcome to React Native!

        </Text>
        
        <View style={styles.buttons}>
          <Button
            onPress={onButtonPress}
            title="有效请求"
          />
          <Button
            onPress={onButtonPress}
            title="无效请求"
            color="#841584"
          />
        </View>

      </View>
    );
  }
}

const onButtonPress = () => {
  Toast.show("button click", Toast.SHORT);
};

const window=Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor:'#6495ED',
    width: 300,
    padding: 5,
  },


  buttons: {
    width: window.width,
    flexDirection: 'row', 
    padding:40,
    justifyContent: 'space-between'
  }
  

});

AppRegistry.registerComponent('rn', () => rn);
