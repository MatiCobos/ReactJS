import { useState } from "react";
import { Button } from 'react-bootstrap';
import './ItemCount.css'

const ItemCount = ({initialStock, maxStock, addToCart}) =>{
    const [count, setCount] = useState (initialStock)
    const addCount = () => {
        setCount (count + 1)
    }
    const restCount = () => {
        setCount (count - 1)
    }

/*     const addToCart = () =>{
        return(
            alert("Agregado al carrito")
        )
    } */
    return(
        <>
            <div className="itemCountContainer">
                <Button onClick={restCount} disabled={count == initialStock}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount} disabled={count == maxStock}>+</Button>
            </div>
            <div className="addToCartContainer">
                <Button onClick={addToCart}>Add to cart</Button>
            </div>
        </>
    )
}

export default ItemCount