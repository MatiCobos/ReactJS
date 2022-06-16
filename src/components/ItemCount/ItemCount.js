import { useState } from "react";
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({initialStock, maxStock}) =>{
    const [count, setCount] = useState (initialStock)
    const addCount = () => {
        setCount (count + 1)
    }
    const restCount = () => {
        setCount (count - 1)
    }

    const addToCart = (count) =>{
        return(
            alert(`Agregaste ${count} articulos al carrito`)
        )
    } 
    
    return(
        <>
            <div className="itemCountContainer">
                <Button onClick={restCount} disabled={count == initialStock}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount} disabled={count == maxStock}>+</Button>
            </div>
            <div className="addToCartContainer">
                <Button onClick={()=> addToCart (count)}>Add to cart</Button>
            </div>
        </>
    )
}

export default ItemCount;