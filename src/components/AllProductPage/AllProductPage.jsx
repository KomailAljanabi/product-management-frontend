import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function AllProductPage() {

    const [products, setProducts] = useState([])

    async function getProducts() {
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products`)
        setProducts(response.data)
    }

    useEffect(() => { getProducts() }, [])

    return (
        <div>
            <h1>All Product</h1>
            {products.map(product =>
                <div key={product._id}>
                    <h3>Title: {product.title}</h3>
                    <Link to={`/products/${product._id}`} >See Details</Link>
                </div>
            )}
        </div>
    )
}

export default AllProductPage
