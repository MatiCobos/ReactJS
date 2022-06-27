import {React, useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {Button} from 'react-bootstrap/';
import Form from 'react-bootstrap/Form';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ title }) => {
    
    const [productList, setProductList] = useState([])
    const {categoryId} = useParams()
    
    useEffect(() => {

        let products = [
            {id: 1, title: "Home Shirt", before: 70, price: 60, pictureURL: "/homeShirt.jpg", stock: 5, category: "shirt" },
            {id: 2, title: "Away Shirt", before: 70, price: 60, pictureURL: "/awayShirt.jpg", stock: 6, category: "shirt" },
            {id: 3, title: "Jacket", before: 200, price: 150, pictureURL: "/jacket.jpg", stock: 7, category: "jacket" },
            {id: 4, title: "Sweat Pants", before: 120, price: 100, pictureURL: "/sweatPants.jpg", stock: 8, category: "pants" },
            {id: 5, title: "Training Polo", before: 100, price: 75, pictureURL: "/trainingPolo.jpg", stock: 9, category: "polo" },
            {id: 6, title: "Walkout Jacket", before: 200, price: 170, pictureURL: "/walkoutJacket.jpg", stock: 10, category: "jacket" },
        ];

        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        }).then((res)=>{
            categoryId?
                setProductList(res.filter((item)=> item.category === categoryId))
                :
                setProductList(res)
        })

    }, [categoryId])

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

export default ItemListContainer;