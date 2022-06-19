import React from "react";
import Item from "../Item/Item";
import './ItemList.css'
import { Row } from "react-bootstrap";

const ItemList = ({productList}) => {
    return(
        <Row>
            {
                productList.map ((item)=>{
                    return(
                        <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL} stock={item.stock}/>
                    )
                })
            }
        </Row>  
    )  
};

export default ItemList