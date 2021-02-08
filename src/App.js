import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    person: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState(
      {
        person: [
          {name: "Maximilian", age: 28},
          {name: "Manu", age: 29},
          {name: "Stephanie", age: 27}
        ]
      }
    )
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm React App.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
