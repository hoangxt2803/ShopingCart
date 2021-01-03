/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import ClassProps from "./ClassProps";
import FunctionProps from './FunctionProps';

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: {
                name: "LuLu",
                img: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
            }
        }
    }
    render() {
        return (
            <div>
                <h2>* Demo Props</h2>
                {/* Truyền props */}
                <ClassProps cho={this.state.dog}>
                    <img src="https://cf.shopee.vn/file/a006722bf91c980b67ff322aa2e78939"></img>
                    
                    
                </ClassProps>
                <FunctionProps dog={this.state.dog}>
                <h1>this is props children function</h1>
                </FunctionProps>
            </div>
        )
    }
}
