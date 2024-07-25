import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const ProductsDetails = () => {const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };



    const[product, setProduct] = useState("")

    const { id } = useParams();
    const history = useNavigate();

    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}/`)
        console.log(data)
        setProduct(data)
    }

    useEffect(() =>{
        getSingleProduct();
    }, [])

    //Delete products

    const [successMessage, setSuccessMessage] = useState('');

    const deleteProduct = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/api/${id}/`);
        setSuccessMessage('Product deleted successfully.');
      } catch (error) {
        console.error("Error deleting product:", error);
        setSuccessMessage('Error deleting product. Please try again.');
      }
    };

    

  return (
    <div className='pd'>
        <div className='tp'>
            <img src={Image} alt="" width={100} />
            <h1>Product Detail</h1>
        </div>
        <div className='j'>
            <img src={product.image} height="200" width="250" style={{marginLeft: "200px", borderRadius: "3px"}} />
            <div className='tp1'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
            </div>
            <div className='tp2'>
                <Link className='l' to={`/${product.id}/update`}> <button style={{backgroundColor: "#000000", color: "#fff", border: "none", borderRadius: "5px",  backgroundColor: isHovered ? '#504f4f' : '#000000', }}>Update</button> </Link>
                <br></br>
                <br></br>
                <br></br>
                <Link className='l' onClick={() => deleteProduct(product.id)}> <button style={{backgroundColor: "#000000", color: "#fff", border: "none", borderRadius: "5px", backgroundColor: isHovered ? '#ff0000' : '#000000' }}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >Delete</button> </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductsDetails;