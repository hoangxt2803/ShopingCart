/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ClassProps extends Component {

    render() {
        console.log(this.props);
        const {cho} = this.props;
        return (
            <div>
                <h3>*Demo class props</h3>
                <p>name: {cho.name}</p>
                <img src={cho.img}></img>
                {this.props.children}
            </div>
        )
    }
}
