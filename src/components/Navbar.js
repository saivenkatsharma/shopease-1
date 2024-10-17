import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Shop-Ease</h1>
      <div style={styles.cartContainer}>
        <span style={styles.cartText}>Cart</span>
        <div style={styles.cartIcon}>🛒</div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f06292',
    padding: '10px 20px',
    position: 'relative',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    margin: 0,
  },
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'absolute',
    right: '20px',
  },
  cartText: {
    color: '#fff',
    marginRight: '10px',
  },
  cartIcon: {
    fontSize: '20px',
  },
};

export default Navbar;
