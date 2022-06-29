import React from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemDetail = ({title, text, price, stock, productCode, pictureURL}) => {

    const onAdd = (count) =>{

        let total = count * price

        return(
            Swal.fire({
                title: `${count} ITEM/S ADDED TO YOUR BAG <br>$ ${total}`,
                text: ` ${title} ${text} `,
                imageUrl: pictureURL,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',         
            })
        )
    }

    return (
    <>
        <div className="container">
            <div className="imgContainer">
                <img src={pictureURL} alt="producto"></img>
            </div>
            <div className="text">
                <h3>{title}</h3>
                <hr />
                <p>{text}</p>
                <p>Price: ${price}</p>
                <p style={{color: "green"}}><i class="bi bi-check-lg" style={{color: 'green'}} />Available stock: {stock}</p>
                <p>Product code: {productCode}</p>
                <hr />
                <ItemCount initialStock={1} stock={stock} onAdd={onAdd}/>
                <Link to={'/cart'}>
                    <Button className="btn-primary">Checkout</Button>
                </Link>
            </div>
        </div>
    </> 
    )
}


export default ItemDetail;