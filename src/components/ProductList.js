import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Grid, CircularProgress, Typography } from '@mui/material';

const ProductList = ({ selectedCategory, addToCart, onBuyNow }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(''); 
    let url = 'https://fakestoreapi.com/products';
    
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    axios.get(url)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) {
    return <CircularProgress style={styles.loading} />;
  }

  if (error) {
    return <Typography variant="h6" color="error" style={styles.error}>{error}</Typography>;
  }

  return (
    <Grid container spacing={3} style={styles.productList}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard 
            product={product} 
            addToCart={addToCart} 
            onBuyNow={onBuyNow}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
  },
  error: {
    textAlign: 'center',
    marginTop: '20px',
  },
  productList: {
    padding: '20px',
  },
};

export default ProductList;
