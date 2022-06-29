import { useState } from "react";
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({initialStock, stock, onAdd}) =>{
    
    const [count, setCount] = useState (initialStock)
    const addCount = () => {
        setCount (count + 1)
    }
    const restCount = () => {
        setCount (count - 1)
    }

/*     const addToCart = (count) =>{
        return(
            alert(`You added ${count} product/s to cart`)
        )
    }  */

    return(
        <>
            <div className="itemCountContainer">
                <Button onClick={restCount} disabled={count == initialStock}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount} disabled={count == stock}>+</Button>
            </div>
            <div className="addToCartContainer">
                <Button onClick={()=> onAdd (count)}><u>Add to cart</u></Button>
            </div>
        </>
    )
}

export default ItemCount;