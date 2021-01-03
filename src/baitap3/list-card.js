import React from "react";
import ItemCard from "./item-card";
function ListCard() {
    return (
        <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </section>

    )
}
export default ListCard;