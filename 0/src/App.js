import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestContainer from './containers/TestContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">~@_@~</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={this.clickTestButton.bind(this)}>Test</button>
        </p>
        <TestContainer></TestContainer>
      </div>
    );
  }

  clickTestButton = () => {
    console.log(`${new Date()} click test button`)
  }

}

export default App;
