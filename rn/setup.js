import React, { Component } from 'react';
import App from './AppContainer'

import store from './store/configure-store'
import { Provider } from 'react-redux';

import Spinner from 'react-native-loading-spinner-overlay';

const setup = () => {

    console.info("setup => ")

    class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store: store
        };
    } 

    render() {
        console.info("render root,store: ")
        return (
        <Provider store = {this.state.store}>
            <App/>
        </Provider>
            
        );
    }

    
  
    }
    return Root;

}




module.exports = setup;