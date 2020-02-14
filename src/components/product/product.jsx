import React from 'react';

export const Product = props => {
    return (
        <>
            <div><img src={props.data.url}/></div>
            <div>Marque : {props.data.brand}</div>
            <div>Description : {props.data.description}</div>
            <div>Prix : {props.data.price}€</div>
        </>
    )
};

export default Product;
