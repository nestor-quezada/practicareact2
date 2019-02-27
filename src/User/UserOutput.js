import React from 'react';

const useroutput = ( props ) => {
    return (
        <li className="list-group-item">
            <p>{props.username}</p>
            <p>{props.valor2}</p>
        </li>
    )
};

export default useroutput;