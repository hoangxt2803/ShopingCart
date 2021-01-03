/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Product extends Component {
    handleDetailClick = () =>{
        const {product, handleDetail} = this.props;
        handleDetail(product);
        
    }
    // handleAddCard = () =>{
    //     const {product, handleAddCart} = this.props;
    //     handleAddCart(product);
    // }
    render() {
        const {product, handleAddCart} = this.props;
        
        return (
            <div className="card">
                <img className="card-img-top" src={product.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <button className="btn btn-success" onClick={this.handleDetailClick}>Chi tiết</button>
                    <button className="btn btn-danger" onClick={()=>{
                        
                        handleAddCart(product);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}
