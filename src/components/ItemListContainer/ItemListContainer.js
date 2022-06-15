import {React} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({ title, firstName, lastName, price }) => {
    return (
        <>
            <div className="itemListContainer">
                <p>{title}</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>$ {price}</p>
            </div>
            <ItemCount initialStock={1} maxStock={5}/>
        </>
    )
}

export default ItemListContainer