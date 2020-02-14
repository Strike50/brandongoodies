import React from 'react';

export const Product = props => {
    return (
        <>
            <span>marque: {props.data.brand}</span>
            <span>description: {props.data.description}</span>
            <img src="{props.data.picture}"/>
            <span>price: {props.data.price}</span>
        </>
    )
};

export default Product;