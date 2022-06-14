import { useState } from "react"
import { Button } from 'react-bootstrap';
import './ItemCount.css'

const ItemCount = () =>{
    const [count, setCount] = useState (1)
    const addCount = () => {
        setCount (count + 1)
    }
    const restCount = () => {
        setCount (count - 1)
    }
    return(
        <div className="itemCountContainer">
            <Button onClick={restCount} disabled={count == 1}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={count == 5}>+</Button>
        </div>
    )
}

export default ItemCount