import React, { Component } from 'react'

export default class HandlingEvents extends Component {
    handleEvent = () => {
        console.log(123);
    }
    handleEventParams = (name) => {
        console.log(name);

    }
    render() {
        return (
            <div>
                <h3>*Handling events</h3>
                <button className="btn btn-success" onClick={this.handleEvent}>Click</button>

                <button className="btn btn-danger" onClick={()=>{this.handleEventParams("Hoang")}}>Click Param</button>
            </div>
        )
    }
}
