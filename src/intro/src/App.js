import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './button';
import MountButton from './lifecycle-mount';
import UpdateButton from './lifecycle-update';

class App extends Component {
  constructor() {
    super();
    this.state = { time: new Date().getTime() };
    setInterval(() => {
      this.setState({ time: new Date().getTime() })
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton title="Click Me Title"></MyButton>
        <MountButton title="Mount button"></MountButton>
        <UpdateButton title={'Update button ' + this.state.time}></UpdateButton>
      </div>
    );
  }
}

export default App;
