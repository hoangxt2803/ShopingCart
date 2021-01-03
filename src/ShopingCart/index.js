/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Modal from "./Modal";
export default class ShopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: 'AMOLED, 6.2", Full HD+',
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
        },

        {
          maSP: 2,
          tenSP: "Meizu 16Xs",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: "./img/meizuphone.jpg",
        },

        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: "./img/applephone.jpg",
        },
      ],
      productSelected: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
      },
      cardList: [],
    };
  }

  handleDetail = (productSelected) => {
    this.setState({
      productSelected,
    });
  };
  handleAddCart = (product) => {
    let { cardList } = this.state;
    const index = cardList.findIndex((card) => {
      return card.maSP === product.maSP;
    });
    if (index !== -1) {
      // Tìm thấy
      cardList[index].soLuong += 1;
    } else {
      // Không tìm thấy
      const newProduct = { ...product, soLuong: 1 };
      cardList = [...cardList, newProduct];
    }
    this.setState({
      cardList,
    });
  };

  handleSumCart = () => {
    let { cardList } = this.state;
    const sumCart = this.state.cardList.reduce((tong, cart) => {
      return (tong += cart.soLuong);
    }, 0);
    return sumCart;
  };

  handleChangeAmount = (status, product) => {
    const { cardList } = this.state;
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === product.maSP;
    });
    if (index !== -1) {
      if (status === true) {
        // Cộng
        cardList[index].soLuong += 1;
      } else {
        if (cardList[index].soLuong > 1)
           cardList[index].soLuong -= 1;
           else
           alert("Số lượng lớn hơn 0");
      }
    }
    this.setState({
      cardList,
    });
  };
  handleDeleteCart = (product) =>{
    const { cardList } = this.state;
    const newCardList = cardList.filter((card)=>{
      return product.maSP !== card.maSP;
    })

    this.setState({
      cardList: newCardList,
    });
  }
  render() {
    const { cardList } = this.state;

    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            {" "}
            Giỏ hàng ({this.handleSumCart()}){" "}
          </button>
        </div>
        {/* handleDetailClick={this.handleDetailClick} */}
        <ProductList
          handleDetail={this.handleDetail}
          handleAddCart={this.handleAddCart}
          productList={this.state.productList}
        />
        <Modal
          handleChangeAmount={this.handleChangeAmount}
          handleDeleteCart = {this.handleDeleteCart}
          cardList={this.state.cardList}
        />
        <ProductDetail productSelected={this.state.productSelected} />
      </section>
    );
  }
}
