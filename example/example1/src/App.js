import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      requestContent: 'please press the btn',
      showLoading:false
    };
  }

  // {this.renderBtn('有效请求', this.handlerValid)}
  // {this.renderBtn('无效请求', this.handlerInvaid)}
  render() {
    console.log("----render---. props => ", this.props)
    return (
        <div>
          {(this.props.showLoading111)?
            <div className="container">
              <Loading/>
            </div>
            : null}
          <div className="App">
            <div className="App-header">
              <Content value={this.props.text22} />
            </div>
            <div>
              {this.renderBtn('有效请求', () => this.handlerValid())}
              {this.renderBtn('无效请求', () => this.handlerInvaid())}
            </div>
          </div>
        </div>
            
    );
  }

  renderBtn(text, handler) {
    return <RequestBtn value={text} onClick={handler} />;
  }

  async getJSON(url) {
      return await new Promise(function (resolve, reject) {
      var client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.send();

      function handler() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error('net::ERR_CONNECTION_TIMED_OUT'));
        }
      };
      });
  }


  handlerValid() {

    console.info("this.props => ", this.props);
    this.props.onRequest("hhhh","loading...");

    //this.setState({ requestContent: "loading....",showLoading:true });
    //debugger;
    this.getJSON("https://api.github.com/users/github").then((json) => {
      //this.setState({ requestContent: json,showLoading:false });
      this.props.onResponseOK(json);
      console.log('Contents: ' + json);
    }).catch(error => {
      //this.setState({ requestContent: "出错了",showLoading:false });
      this.props.onResponseExcept(error);
      console.error('出错了', error);
    });

  }


  handlerInvaid() {
    //this.setState({ requestContent: "loading...." ,showLoading:true });
    this.props.onRequest("hhhh","loading...");
    this.getJSON("https://baiduxxxx.com").then((json) => {
      //this.setState({ requestContent: json,showLoading:false });
      this.props.onResponseOK(json);
      console.log('Contents: ' + json);
    }).catch(error => {
        console.log("Error", error.message);
         this.props.onResponseExcept(error.message);
       //this.setState({ requestContent: error.message,showLoading:false });
    });
  }
}

class Content extends Component {

  render() {
    return (
      <p className="App-text">
        {this.props.value}
      </p>);
  }
}

class RequestBtn extends Component {
  render() {
    return (
      <button className="Btn" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Loading extends Component {
  render() {
    return (
         <div className="load" ></div>
    );
  }
}


export default App;
