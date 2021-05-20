import React, { useState } from 'react';
import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title:</label><br/>
                <input type="text" onChange={ (e) => setTitle(e.target.value) } value={title}/>
            </div>
            <div>
                <label>Price:</label><br/>
                <input type="text" onChange={ (e) => setPrice(e.target.value) } value={price}/>
            </div>
                <input type="submit" />
            
        </form>
    )
}