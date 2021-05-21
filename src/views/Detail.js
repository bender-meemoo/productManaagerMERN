import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div className="container">
            <h2 className="m-2">{product.title} </h2>
            <h4 className="m-2">Price: {product.price} </h4>
            <h4 className="m-2">Description: {product.desc} </h4>
        </div>
    )
}