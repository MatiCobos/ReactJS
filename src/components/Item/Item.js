import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css';

const Item = ({id, price, title, pictureURL, stock, before}) =>{

    return (
        
        <Card  style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={pictureURL} />
            <Card.Body>
                <Card.Title>
                    {title} 
                    <Link to={`/item/${id}`}>
                        <i class="bi bi-eye" />
                    </Link>
                </Card.Title>
                <Card.Text>
                    <spam className="tachado">${before}</spam> <spam style={{color: "red"}}> ${price} </spam>
                </Card.Text>
                {/* <ItemCount initialStock={1} stock={stock}/> */}
            </Card.Body>
        </Card> 
    )
}

export default Item;

