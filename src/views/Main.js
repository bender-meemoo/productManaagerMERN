import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])


    return (
        <>
            <ProductForm />
            <hr/>
            <h1>All Products:</h1>
            {loaded && <ProductList products={ products }/>}
        </>
    )
}


