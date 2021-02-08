import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm React App.</h1>
        <Person name="Manish" age="5"/>
        <Person name="Jiid" age="6"/>
        <Person name="pintu" age="5">My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
