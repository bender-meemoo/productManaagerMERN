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
            <div className="form group col-md-3 border p-2 mx-auto m-2 rounded">
                <label>Title:</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}  className="form-control"/>
            </div>
            <div className="form group col-md-3 border p-2 mx-auto m-2 rounded">
                <label>Price:</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control"/>
            </div>
            < div className="form group col-md-3 border p-2 mx-auto m-2 rounded">
                <label>Description:</label><br />
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} className="form-control"/>
            </div>
            <input type="submit" className="btn btn-secondary" value="Create"/>

        </form>
    )
}