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
  ActivityIndicator
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';


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

       <View style={{ flex: 1 }}>
        <Spinner visible={this.state.showLoading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <View style={styles.container}>
          <Text style={styles.content}>
            {this.state.requestContent}
          </Text>
          <View style={styles.buttons}>
            <Button
              onPress={() => this.onButtonPress(0)}
              title="有效请求"
            />
            <Button
              onPress={() =>this.onButtonPress(1)}
              title="无效请求"
              color="#841584"
            />
          </View>
        </View>
      </View>
        
    );
  }

onButtonPress (type) {
  //Toast.show("button clddick", Toast.SHORT);
  this.setState({ requestContent: "loading....",showLoading:true });
  var url = type == 0 ? "https://api.github.com/users/github" : "https://baiduxxxx.com";

  Http.doRequest(url).then((json) => {
      console.log('Contents: ' + json);
      this.setState({ requestContent: json,showLoading:false });
    }).catch(error => {
      console.log('出错了', error);
      this.setState({ requestContent: error.message,showLoading:false });
  });
};
  
}




const window=Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loadingContainer: {
    width: window.width,
    height: window.height,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor:'#6495ED',
    width: 300,
    height:400,
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
