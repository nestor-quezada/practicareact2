import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Useroutput from './User/UserOutput';
import Userinput from './User/UserInput';

class App extends Component {
  state = {
    useroutputs: [
      { username: 'Max', valor2: 28 },
      { username: 'Manu', valor2: 29 },
      { username: 'Stephanie', valor2: 26 }
    ],
    otherState: 'some other value'
  }
     
  handleChange = (event) =>{
    this.setState({useroutputs: [
      { username: 'Max', valor2: 28 },
      { username: 'Manu', valor2: 29 },
      { username: event.target.value, valor2: 26 }
    ],
    otherState: 'some other value'});
    
  }

  render() {
    return (
      <div className="App">
        <Userinput changed={this.handleChange} valor={this.state.useroutputs[2].username}/>

        <ul className="list-group list-group-flush">
        
          <Useroutput username={this.state.useroutputs[0].username} valor2="parrafo 2"></Useroutput>
          <Useroutput username={this.state.useroutputs[1].username} valor2="parrafo 2"></Useroutput>
          <Useroutput username={this.state.useroutputs[2].username} valor2="parrafo 2"></Useroutput>

        </ul>
      </div>
    );
  }
}

export default App;
