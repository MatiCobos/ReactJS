import React from "react";
import Item from "../Item/Item";

const ItemList = ({productList}) => {
    
    <div>
        {
            productList.map ((item)=>{
                return(
                    <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL}/>
                )
            })
        }
    </div>
    
};

export default ItemList

//Asi ejecute el map antes, y tampoco funcionaba
/* 
            productList.map((item)=>
            (<Item key={item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL}/>)
            ) */