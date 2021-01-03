/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
        this.handleLogin = this.handleLogin.bind(this);   

    }


    //dk ? dung : sai
    renderHTML = () => (!this.state.isLogin) ? (<button className="btn btn-success" onClick={this.handleLogin}>Click</button>) : (<h1>Hello Hoang</h1>);
    handleLogin = () => {
        this.setState({
            isLogin: true,
        })
    }
    // handleLogin(){
    //     this.setState({
    //         isLogin: true,
    //     })
    // }
    render() {
        //nếu State thay đổi render chạy lại
        console.log("render");
        return (
            <div>
                <h3>*State</h3>
                {this.renderHTML()};
            </div>
        )
    }
}
