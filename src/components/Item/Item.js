import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item = ({id, price, title, pictureURL, stock, before}) =>{
    return (
        
        <Card  style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={pictureURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <spam className="tachado">${before}</spam> <spam style={{color: "red"}}> ${price} </spam>
                </Card.Text>
                <ItemCount initialStock={1} stock={stock}/>       
                <Button variant="primary">
                    <Link to={`/item/${id}`}>
                        See more
                    </Link>
                </Button>
            </Card.Body>
        </Card>
        
    )
}

export default Item;

