import React, { useState } from 'react';

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
    <div className="product-card" style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <h2 style={styles.price}>${product.price}</h2>
      <p style={styles.description}>
        {showFullDescription 
          ? product.description 
          : `${product.description.substring(0, 30)}... `}
        <button onClick={toggleDescription} style={styles.toggleButton}>
          {showFullDescription ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <div style={styles.buttonContainer}>
        <button 
          onClick={() => addToCart(product)} 
          style={styles.addToCartButton}
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuyNow} 
          style={styles.buyNowButton}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};


const styles = {
  card: {
    border: '2px solid #4CAF50',
    borderRadius: '5px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    maxWidth: '200px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFFFFF',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
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
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  addToCartButton: {
    marginRight: '5px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buyNowButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#D32F2F',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ProductCard;
