import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) =>  {
  
  //useState always returns an array with exactly two elements 1. current state(intial or(if) changed) 2. function that allows us to update this state such that react is
  //aware of it and rerender this component

  const [personState, setPersonsState] = useState({
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //console.log('was clicked');
    setPersonsState({
      persons: [
        {name: "Maximilian", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    });
  }

    return (
      <div className="App">
        <h1>Hi! I'm React App.</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  
}

export default app;

