import React from 'react';
import Product from "../product/product";

export const Main = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://brandongoodies-74f91.firebaseio.com/articles.json')
            .then(response => {
                response.json()
                .then(json => {
                    const productArray = [];
                    for (let key in json) {
                        productArray.push({
                            ...json[key],
                            id: key
                        });
                    }
                    setProducts(productArray);
                })
        });
    }, []);

    return (
        <>
            {products.map((product, i) => (
                <div key={`product-${i}`}>
                    <Product data={product} />
                </div>
            ))}
        </>
    )

};

export default Main;
