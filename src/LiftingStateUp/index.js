import React, { Component } from 'react'
import OneChild from "./OneChild";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {
                name: "Yasuo",
                img: "https://media.thethao247.vn/upload/trong/2020/02/22/huong-dan-choi-yasuo.png",
                sayings: "hasagi",
            }
        }
    }
    handleChangeSayings = (sayings)=>{
        //Sửa câu nói
        this.setState({
            hero: {
                name: "Yasuo",
                img: "https://media.thethao247.vn/upload/trong/2020/02/22/huong-dan-choi-yasuo.png",
                sayings,
            }
        });

    }
    render() {
        return (
            <div>
                <h2>*Lifting state up</h2>
                <OneChild
                handleChangeSayings = {this.handleChangeSayings}
                hero={this.state.hero}></OneChild>
            </div>
        )
    }
}
