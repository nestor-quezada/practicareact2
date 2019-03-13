import React, { Component } from 'react';

import './App.css';
import '../bootstrap.min.css';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharsComponent from '../components/CharsComponent/CharsComponent';
import Radium, { StyleRoot } from 'radium';
import InputComponent from '../components/InputComponent/InputComponent';

class App extends Component {
  state = {
    cadenainput : ""
  }

  handleChange = (event) => {
    this.setState({
      cadenainput: event.target.value
    });
    let a = 0;
  }
  
  deleteElement = (index) => {
    
    let arrayCaracteres = this.state.cadenainput.split('');
    arrayCaracteres.splice(index, 1).join("");
    
    this.setState({
      cadenainput: arrayCaracteres.join("")
    });
    
  }
   
  render() {

    return (
      <StyleRoot>
        <div className="App">
          
          <InputComponent changed={this.handleChange} cadenainput={this.state.cadenainput} />
          <ValidationComponent longitud={this.state.cadenainput.length}></ValidationComponent>
          <CharsComponent clicked={() => this.deleteElement()} chars={this.state.cadenainput.split('')} />
        </div>
      </StyleRoot>
    );

  }
}

export default App;
