import React, { Component } from 'react'

export default class ExampleCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg",
        };
    }

    handleChangeColor = (img) => {

        this.setState({
            img,
        });
    }


    render() {
        return (
            <div className="container">
                <h3>* ExampleCar</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={this.state.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger " onClick={() => { this.handleChangeColor("./img/imgRedCar.jpg") }}>Red color</button>
                        <button className="btn btn-secondary mx-3" onClick={() => { this.handleChangeColor("./img/imgSilverCar.jpg") }}>Silver color</button>
                        <button className="btn btn-dark" onClick={() => { this.handleChangeColor("./img/imgBlackCar.jpg") }}>Black color</button>
                    </div>
                </div>
            </div>

        )
    }
}
