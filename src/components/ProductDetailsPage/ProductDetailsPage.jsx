import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
function ProductDetailsPage() {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0
    })

    const {id} = useParams()

    async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${id}`)
        setProduct(response.data)
    }

    useEffect(() => {getProduct()},[])

    const navigate = useNavigate()
    async function deleteProduct(){
        const response = await axios.delete(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${id}`)
        navigate('/products')
    }

    return (
        <div>
            <h1>Product Details</h1>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <br />
            <p>{product.category}</p>
            <br />
            <p>{product.price}</p>
            <br />
            <p>{product.quantity}</p>
            <br />
            <Link to={`/products/${id}/edit`} >Edit Product</Link>
            <br />
            <button onClick={deleteProduct} >Delete Product</button>

        </div>

    )
}
<h1>Product Details</h1>
export default ProductDetailsPage
