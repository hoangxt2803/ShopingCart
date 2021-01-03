/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function FunctionProps(props) {
    console.log(props);
    const {dog} =props;
    return (
        
        <div>
            <h3>*Demo Function props</h3>
            <p>name: {dog.name}</p>
            <img src={dog.img}></img>
            {props.children}
        </div>
    )
}

export default FunctionProps
