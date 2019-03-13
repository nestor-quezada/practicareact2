
import React, { Component } from 'react';

class charcomponent extends Component {
    
    constructor (props){
        super(props);
    }

    componentWillMount() {
        console.log("I'm about to mount");
    }

    componentDidMount (){
        console.log("I did mount");
    }
      
    render (){
        const style = {
            display: 'inline-block', padding: '16px', textAlign: 'center', margin: '16px', border: '1px solid black'
        }
        console.log("I'm rendering");
        return <p style={style} onClick={this.props.clicked}>{this.props.caracter}</p>
    }

    
         
};

export default charcomponent;