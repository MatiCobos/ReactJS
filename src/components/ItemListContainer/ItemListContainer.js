import {React, useEffect, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ title }) => {
    
    const [productList, setProductList] = useState([])

    useEffect(() => {

        let products = [
            {id: 1, title: "Home Shirt", price: 60, pictureURL: "/homeShirt.jpg", stock: 5 },
            {id: 2, title: "Away Shirt", price: 60, pictureURL: "/awayShirt.jpg", stock: 6 },
            {id: 3, title: "Jacket", price: 150, pictureURL: "/jacket.jpg", stock: 7 },
            {id: 4, title: "Sweat Pants", price: 100, pictureURL: "/sweatPants.jpg", stock: 8 },
            {id: 5, title: "Training Polo", price: 75, pictureURL: "trainingPolo.jpg", stock: 9 },
            {id: 6, title: "Walkout Jacket", price: 170, pictureURL: "walkoutJacket.jpg", stock: 10 },
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
        </>
    )
}

export default ItemListContainer