import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ selectedCategory, addToCart, onBuyNow }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    axios.get(url)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, [selectedCategory]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart}
          onBuyNow={onBuyNow} // Pass the onBuyNow function to ProductCard
        />
      ))}
    </div>
  );
};

export default ProductList;
