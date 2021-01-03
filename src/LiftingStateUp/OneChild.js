/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class OneChild extends Component {
    handleClick = ()=>{
        //Sửa câu nói
        this.props.handleChangeSayings("20 gg");
    }
    render() {

        const {hero} = this.props;
        return (
            <div>
                <div className="card text-center">
                    <img className="card-img-top w-50" src={hero.img} alt />
                    <div className="card-body ">
                        <h4 className="card-title">{hero.name}</h4>
                        <p className="card-text">{hero.sayings}</p>
                        <button className="btn btn-info" onClick={this.handleClick}>Sửa câu nói</button>
                    </div>
                </div>
            </div>

        )
    }
}
