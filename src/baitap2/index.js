import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Contact from "./contact";
import Footer from "./footer";

import ListCard from "./list-card";
import WhatWeDo from "./whatwedo";
function Baitap2(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <div className="row">
                    <WhatWeDo/>
                    <Contact/>
                </div>
                <ListCard/>
            </div>
            
            <Footer/>

        </div>
    )
}

export default Baitap2;