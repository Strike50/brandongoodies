import React from 'react';
import './product.css';

export const Product = props => {
    return (
        <>
            <div><img src={props.data.url} alt={props.data.description} className={"product"}/></div>
            <div>Marque : {props.data.brand}</div>
            <div>Description : {props.data.description}</div>
            <div>Prix : {props.data.price}€</div>
        </>
    )
};

export default Product;
