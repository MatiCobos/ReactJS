import React from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({title, text, price, stock, productCode, pictureURL}) => {

    return (
    <>
        <div className="container">
            <div className="imgContainer">
                <img src={pictureURL} alt="producto"></img>
            </div>
            <div className="text">
                <p>{title}</p>
                <p>{text}</p>
                <p>Price: ${price}</p>
                <p>Available stock: {stock}</p>
                <p>Product code: {productCode}</p> 
                <ItemCount initialStock={1} stock={stock}/> 
            </div>
        </div>
    </> 
    )
}


export default ItemDetail;