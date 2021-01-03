/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Product from "./Product";
export default class ProductList extends Component {
    
   
    renderListItem = () =>{
        const {productList, handleDetail, handleAddCart} = this.props;
        return productList.map((item,index)=>{
            return (
                <div className="col-sm-4" key={index}>
                    <Product handleDetail={handleDetail} handleAddCart={handleAddCart}  product = {item}/>
                    
                </div>
            );
        })
    }

    render() {
        const productList = this.props;
        console.log(productList);
        return (
            
            <div className="container danh-sach-san-pham">
                <div className="row">
                    {this.renderListItem()}


                </div>
            </div>
        )
    }
}
