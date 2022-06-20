import {React, useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {Button} from 'react-bootstrap/';
import Form from 'react-bootstrap/Form';
import './ItemListContainer.css'

const ItemListContainer = ({ title }) => {
    
    const [productList, setProductList] = useState([])

    useEffect(() => {

        let products = [
            {id: 1, title: "Home Shirt", before: 70, price: 60, pictureURL: "/homeShirt.jpg", stock: 5 },
            {id: 2, title: "Away Shirt", before: 70, price: 60, pictureURL: "/awayShirt.jpg", stock: 6 },
            {id: 3, title: "Jacket", before: 200, price: 150, pictureURL: "/jacket.jpg", stock: 7 },
            {id: 4, title: "Sweat Pants", before: 120, price: 100, pictureURL: "/sweatPants.jpg", stock: 8 },
            {id: 5, title: "Training Polo", before: 100, price: 75, pictureURL: "trainingPolo.jpg", stock: 9 },
            {id: 6, title: "Walkout Jacket", before: 200, price: 170, pictureURL: "walkoutJacket.jpg", stock: 10 },
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
                <h1>{title}</h1>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary"><u>Search</u></Button>
                </Form>
            </div>
            <ItemList productList={productList}/>
        </>
    )
}

export default ItemListContainer