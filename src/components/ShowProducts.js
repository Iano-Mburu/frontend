import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ShowProducts.css'
//import './Nav.css';


const ShowProducts = () => {

    const [products, setProducts] = useState([])


    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div className="container1">
            <h1 style={{textAlign: "center", fontFamily: "sans-serif" }}>FinMate Products</h1>
            <div className="product-grid">
            {
                products.map((product,index) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} height="150" width="200"  alt="Iphone" style={{borderRadius: "2px"}} />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.category}</p>

                        <Link className="btn" to={`/${product.id}/`}> <button style={{backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px" }} >Show Details</button> </Link>
                                        
                    </div>
                )
                )
            }

            </div>  
        </div>
    )
}

export default ShowProducts;