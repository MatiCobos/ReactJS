import { useState } from "react";
import { Button } from 'react-bootstrap';
import './ItemCount.css'

const ItemCount = ({initialStock, maxStock}) =>{
    const [count, setCount] = useState (1)
    const addCount = () => {
        setCount (count + 1)
    }
    const restCount = () => {
        setCount (count - 1)
    }
    return(
        <div className="itemCountContainer">
            <Button onClick={restCount} disabled={count == initialStock}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={count == maxStock}>+</Button>
        </div>
    )
}

export default ItemCount