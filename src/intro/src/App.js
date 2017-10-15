import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MyButton from './button';
import MountButton from './lifecycle-mount';
import UpdateButton from './lifecycle-update';

const MyButtonPage = () => (
  <div>
    <MyButton title="Click Me Title"></MyButton>
  </div>
)
const MountButtonPage = () => (
  <div>
    <MountButton title="Mount button"></MountButton>
  </div>
)
const UpdateButtonPage = (props) => (
  <div>
    <UpdateButton title={'Update button ' + props.time}></UpdateButton>
  </div>
)

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
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Link to="/">Dashboard  </Link>
          <Link to="/mount">mount  </Link>
          <Link to="/update">update</Link>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Route exact path="/" component={MyButtonPage}></Route>
          <Route path="/mount" component={MountButtonPage}></Route>
          <Route path="/update" render={() => (<UpdateButtonPage time={this.state.time} />)} ></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
