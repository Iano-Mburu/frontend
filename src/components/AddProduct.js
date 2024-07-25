import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddProduct = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const history = useNavigate();

    const AddProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null) {
            formField.append('image', image)
        }
        try {
            const response = await axios.post('http://localhost:8000/api/', formField);
            console.log(response.data);
            history.push('/');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    return (
        <div className="bg">
            <div className="bh">
            <img src={Image} alt="" width={100} />
            <h1>Add Product</h1>
            </div>
            <div className="container">

                        <input
                            type="file"
                            className="file"
                            name="image"
                            src={image}
                            onChange={(e) => setImage(e.target.files[0])} 
                        />
                        <div className="cont-1">
                        <input 
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>

                        <div className="cont-2">
                        <input 
                            type="text"
                            className="form"
                            placeholder="Price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        </div>

                        <div className="cont-3">
                        <textarea 
                            type="text"
                            id="freeform"
                            rows="20"
                            cols="34"
                            className="form"
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </div>

                        <div className="cont-4">
                        <input 
                            type="text"
                            className="form"
                            placeholder="Category"
                            name="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        </div> 
                        <button  onClick={AddProductInfo} style={{padding: "6px 30px", width:"100px", marginLeft: "90px", color: "#fff", backgroundColor: "#000", borderStyle: "none", borderRadius: "5px", fontSize: "15px", fontFamily: "sans-serif", fontWeight: "lighter"}} >Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct; 