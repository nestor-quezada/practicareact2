import React from 'react';

const useroutput = ( props ) => {
    return (
        <div className="container">
            <p  type="text">{props.username}</p>
            <p  type="text">{props.valor2}</p>
        </div>
    )
};

export default useroutput;