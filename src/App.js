import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 }); // Price filter state

  // State for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(false); // To toggle login form visibility

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to handle buy now (redirect)
  const handleBuyNow = (product) => {
    addToCart(product); // Add product to cart first
    alert("You have been redirected to the cart!"); // Placeholder alert
    
  };

  // Function to handle price filter changes
  const handlePriceFilterChange = (min, max) => {
    setPriceFilter({ min, max });
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear form
    setEmail('');
    setPassword('');
    setIsLoginVisible(false); 
  };

  return (
    <div className="App">
      <div className="scrolling-background">
        <Navbar cartItems={cartItems} /> {/* Pass cart items to Navbar */}
        <div className="content">
          <Categories onSelectCategory={setSelectedCategory} />
          <ProductList 
            selectedCategory={selectedCategory} 
            addToCart={addToCart} 
            priceFilter={priceFilter} 
            setPriceFilter={handlePriceFilterChange} 
            onBuyNow={handleBuyNow} // Pass the onBuyNow function to ProductList
          />
          
          {/* Button to toggle login form */}
          <button onClick={() => setIsLoginVisible(!isLoginVisible)}>
            {isLoginVisible ? 'Hide Login' : 'Show Login'}
          </button>

          {/* Login Form */}
          {isLoginVisible && (
            <div className="login-container">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
