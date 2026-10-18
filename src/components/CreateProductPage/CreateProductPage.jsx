import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function CreateProductPage() {
    const [pData, setPData] = useState({
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0
    }
    )

    function handleChange(event){
        setPData({...pData, [event.target.name]:event.target.value})
    }

    const navigate = useNavigate()
    async function handleSubmit(event){
        event.preventDefault()
        const response = axios.post(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products`, pData)
        navigate('/products')
    }

    return (
        <div>
            <h1>Create a New Product</h1>

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
                <button>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProductPage
