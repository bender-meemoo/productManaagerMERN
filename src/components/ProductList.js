import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            {props.products.map((product, i) =>{
                return <h3><Link to={"/product/" + product._id} key={i}>{ product.title }</Link></h3>
            })}
        </div>
    )
}