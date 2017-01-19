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
const Http = NativeModules.MyHttp;

export default class rn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requestContent: 'please press the btn',
      showLoading:false
    };
  } 

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
  //Toast.show("button clddick", Toast.SHORT);

  Http.doRequest("https://api.github.com/users/github").then((json) => {
      console.log('Contents: ' + json);
    }).catch(error => {
      console.error('出错了', error);
  });
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
