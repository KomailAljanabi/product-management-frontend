import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to='/'>Homepage</Link> &nbsp;
      <Link to='/products'>All Products</Link> &nbsp;
      <Link to='/products/create'>Create a Product</Link>
    </div> 
  )
}

export default Navbar