import React from 'react';
import CharComponent from './CharComponent/CharComponent';

const charscomponent = ( props ) => props.chars.map ((char, index) => {
   
    return <CharComponent 
        clicked={() => props.clicked(index)} 
        caracter={char} 
        key={index} />
  });

export default charscomponent;