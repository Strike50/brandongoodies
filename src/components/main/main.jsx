import React from 'react';

export const Main = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://firebase.io//producs.json')
            .then(response => {
                response.json()
                .then(json => {
                    setProducts(json);
                })
        });
    }, []);

    return (
        <>
            {products.map((product, i) => (
                <Product />
            ))}
        </>
    )

};

export default Main;
