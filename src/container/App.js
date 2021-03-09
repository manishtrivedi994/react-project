import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  
  //useState always returns an array with exactly two elements 1. current state(intial or(if) changed) 2. function that allows us to update this state such that react is
  //aware of it and rerender this component
  //React Hooks doesn't merge with the old state in turn replaces the old state

    constructor(props) {
      super(props);
      console.log('[App.js] constructor');
    }

   state = ({
    persons: [
      {id: '0', name: "Max", age: 28},
      {id: '1', name: "Manu", age: 29},
      {id: '2', name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  });

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] component did mount ')
  }

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
      console.log('[App.js] render'); 

      let persons = null;
      if(this.state.showPersons) {
        persons = (
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
        );
      }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit 
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
      </StyleRoot>
    );
    }
  }
export default Radium(App);

