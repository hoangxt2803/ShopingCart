import React, { Component } from 'react'

export default class RenderingElement extends Component {
    name = "Hoang";
    age = 18;

    renderInfo = () => {
        return <p>Username: {this.name} - Age: {this.age}</p>;
    }
    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {/* <p>Username: {this.name} - Age: {this.age}</p> */}
                {this.renderInfo()}
            </div>
        )
    }
}
