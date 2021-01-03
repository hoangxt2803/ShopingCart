import React from "react";
import ItemCard from "./item-card";

function ListCard(){
    return(
        <div className="row">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>

            
    )
}

export default ListCard;