import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item = ({id, price, title, pictureURL, stock}) =>{
    return (
        
        <Card  style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={pictureURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <ItemCount initialStock={1} stock={stock}/>
            </Card.Body>
        </Card>
        
    )
}

export default Item;


//aca van las cards