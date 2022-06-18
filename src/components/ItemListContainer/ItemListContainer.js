import {React, useEffect, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ title }) => {
    
    const [productList, setProductList] = useState([])

    useEffect(() => {

        let products = [
            {id: 1, title: "producto 1", price: 1000, pictureURL: "https://dummyimage.com/200x300/000/fff" },
            {id: 2, title: "producto 2", price: 2000, pictureURL: "https://dummyimage.com/200x300/000/fff" },
            {id: 3, title: "producto 3", price: 3000, pictureURL: "https://dummyimage.com/200x300/000/fff" },
            {id: 4, title: "producto 4", price: 4000, pictureURL: "https://dummyimage.com/200x300/000/fff" },
            {id: 5, title: "producto 5", price: 5000, pictureURL: "https://dummyimage.com/200x300/000/fff" },
            {id: 6, title: "producto 6", price: 6000, pictureURL: "https://dummyimage.com/200x300/000/fff" },
        ];

        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        }).then((res)=>{
            setProductList(res)
        })

    }, [])

    return (
        <>
            <div className="itemListContainer">
                <p>{title}</p>
            </div>
            <ItemList productList={productList}/>
            <ItemCount initialStock={1} maxStock={5}/>
        </>
    )
}

export default ItemListContainer