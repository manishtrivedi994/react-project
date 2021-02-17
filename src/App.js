import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  //useState always returns an array with exactly two elements 1. current state(intial or(if) changed) 2. function that allows us to update this state such that react is
  //aware of it and rerender this component
  //React Hooks doesn't merge with the old state in turn replaces the old state

   state = ({
    persons: [
      {id: '0', name: "Max", age: 28},
      {id: '1', name: "Manu", age: 29},
      {id: '2', name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  });

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

      let persons = null;
      if(this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
          </div>
          
        );
      }

    return (
      <div className="App">
        <h1>Hi! I'm React App.</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    }
  }
export default App;

