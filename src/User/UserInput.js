import React from 'react';

const userinput = ( props ) => {
    return (
        <div className="container">
            <input onChange={props.changed} type="text" value={props.valor}/>
        </div>
    )
};

export default userinput;