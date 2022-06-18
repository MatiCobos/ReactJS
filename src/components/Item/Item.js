import React from "react";

const Item = ({id, price, title, pictureURL}) =>{
    return (
        <div>
            <h1>{id}</h1>
            <p>{price}</p>
            <p>{title}</p>
            <p>{pictureURL}</p>
        </div>
    )
}

export default Item;


//aca van las cards