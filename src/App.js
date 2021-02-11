import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  //useState always returns an array with exactly two elements 1. current state(intial or(if) changed) 2. function that allows us to update this state such that react is
  //aware of it and rerender this component
  //React Hooks doesn't merge with the old state in turn replaces the old state

   state = ({
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  });



   switchNameHandler = (newName) => {
    //console.log('was clicked');
    this.setState({
      persons: [
        {name: "Maximilian", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ],
      showPersons: false
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Maximilian", age: 28},
        {name: event.target.value, age: 29},
        {name: "Stephanie", age: 27}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
    render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1>Hi! I'm React App.</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        { this.state.showPersons ?
            <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchNameHandler}>My Hobbies: Racing</Person>
            </div>
            :
            null
        }

      </div>
    );
    }
  }
export default App;

