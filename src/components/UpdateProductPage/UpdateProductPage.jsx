import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect } from 'react'
function UpdateProductPage() {
    const [pData, setPData] = useState({
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0
    }
    )

    const {id} = useParams()

    async function updateValues() {
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${id}`)
        setPData(response.data)
    }

    useEffect(() =>{updateValues()},[])

    function handleChange(event){
        setPData({...pData, [event.target.name]:event.target.value})
    }

    const navigate = useNavigate()
    async function handleSubmit(event){
        event.preventDefault()
        const response = axios.put(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${id}`, pData)
        navigate('/products')
    }

    return (
        <div>
            <h1>Update Product</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title: </label>
                <input onChange={handleChange} name='title' id='title' value={pData.title} type="text" />
                <br />
                <label htmlFor="description">Description: </label>
                <input onChange={handleChange} name='description' id='description' value={pData.description} type="text" />
                <br />
                <label htmlFor="category">Category:</label>
                <input onChange={handleChange} name='category' id='category' value={pData.category} type="text" />
                <br />
                <label htmlFor="price">Price: </label>
                <input onChange={handleChange} name='price' id='price' value={pData.price} type="Number" />
                <br />
                <label htmlFor="quantity">Quantity: </label>
                <input onChange={handleChange} name='quantity' id='quantity' value={pData.quantity} type="Number" />
                <br />
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage
