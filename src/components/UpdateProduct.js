import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './Nav.css'



const UpdateProducts = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const history = useNavigate()
    const { id } = useParams();

    const loadProducts = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
        setCategory(data.category)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const UpdateProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'PUT',
            url:`http://localhost:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data)
            history.push('/')
        })
    }

  return (
    <div className='up'>
        <div className='up1'>
            <img src={Image} alt="" width={100} />
            <h1 style={{fontWeight: "100"}}>Update Page</h1>
        </div>
      <div className="container">
                        <img src={image} height="200" width="250"  style={{borderRadius: "5px"}} />
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
                        <button className="btn-1" onClick={UpdateProductInfo} style={{padding: "6px 30px", width:"100px", marginLeft: "90px", color: "#fff", backgroundColor: "#000", borderStyle: "none", borderRadius: "5px", fontSize: "15px", fontFamily: "sans-serif", fontWeight: "lighter"}}  >Update</button>
            </div>
    </div>
  )
}

export default UpdateProducts;