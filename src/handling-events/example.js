import React, { Component } from 'react'

export default class ExampleEvent extends Component {
    isLogin = false;
    // renderHTML = () => {
    //     if(!this.isLogin){
    //         return (
    //         <button className="btn btn-success" onClick="login">Click</button>
    //         );
    //     }
    //     else{
    //         return (
    //             <h1>Hello Hoang</h1>
    //         );
    //     }

    // }

    //dk ? dung : sai
    renderHTML = () => (!this.isLogin) ? (<button className="btn btn-success" onClick={this.handleLogin}>Click</button>) : (<h1>Hello Hoang</h1>);
    handleLogin = () => {
        console.log(this.isLogin);
        this.isLogin=true;
        console.log(this.isLogin);
        
    }
    render() {
        return (
            <div>
                <h3>*ExampleEvent</h3>
                {this.renderHTML()};
            </div>
        )
    }
}
