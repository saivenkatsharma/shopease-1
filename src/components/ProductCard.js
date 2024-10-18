import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product, addToCart, onBuyNow }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleBuyNow = () => {
    addToCart(product);
    alert("Redirecting to Cart...");
    onBuyNow();
  };

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={styles.image}
      />
      <CardContent>
        <Typography variant="h6" sx={styles.title}>
          {product.title}
        </Typography>
        <Typography variant="h5" sx={styles.price}>
          ${product.price}
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          {showFullDescription 
            ? product.description 
            : `${product.description.substring(0, 30)}... `}
          <Button onClick={toggleDescription} sx={styles.toggleButton}>
            {showFullDescription ? 'Show Less' : 'Read More'}
          </Button>
        </Typography>
        <Box sx={styles.buttonContainer}>
          <Button 
            onClick={() => addToCart(product)} 
            variant="contained" 
            sx={styles.addToCartButton}
          >
            Add to Cart
          </Button>
          <Button 
            onClick={handleBuyNow} 
            variant="contained" 
            sx={styles.buyNowButton}
          >
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    border: '2px solid #4CAF50',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    maxWidth: '240px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)', // Hover effect
    },
  },
  image: {
    height: '200px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  price: {
    fontSize: '1.5em',
    color: '#4CAF50',
  },
  description: {
    fontSize: '0.9em',
    color: '#555',
  },
  toggleButton: {
    marginTop: '5px',
    padding: '5px 10px',
    color: '#4CAF50',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  addToCartButton: {
    marginRight: '5px',
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    '&:hover': {
      backgroundColor: '#388E3C',
    },
  },
  buyNowButton: {
    padding: '10px 15px',
    backgroundColor: '#D32F2F',
    '&:hover': {
      backgroundColor: '#C62828',
    },
  },
};

export default ProductCard;
