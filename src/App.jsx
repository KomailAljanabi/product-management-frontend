// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import AllProductPage from './components/AllProductPage/AllProductPage';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import Navbar from './components/Navbar/Navbar';
import CreateProductPage from './components/CreateProductPage/CreateProductPage';
import UpdateProductPage from './components/UpdateProductPage/UpdateProductPage';
const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/products/:id/edit" element={<UpdateProductPage />} />
      </Routes>
    </div>
  )

};

export default App;
