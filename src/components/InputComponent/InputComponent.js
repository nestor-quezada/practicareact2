import React from 'react';

const inputcomponent = ( props ) => {
    
   
    
    return (
        <input type="text" onChange={(event) =>props.changed(event)} value={props.cadenainput}></input>
    )
};

export default inputcomponent;