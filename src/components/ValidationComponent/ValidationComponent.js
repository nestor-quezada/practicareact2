import React from 'react';

const validationcomponent = ( props ) => {
    
    let texto = "";
    let classes = [];

    if(props.longitud < 5) {
        texto = "Too short";
        classes.push( 'red' ); // classes = ['red'] 
    } else {
        texto = "Suficientemente largo";
        classes.push( 'green' );
    }
    
    return (
        <p className={classes}> {texto} </p>
    )
};

export default validationcomponent;