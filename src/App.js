import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { Container, Button, TextField, Box, Typography, Card, CardContent } from '@mui/material'; // Importing Material-UI components


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]); 
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 }); 

  // State for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [loginMessage, setLoginMessage] = useState(''); 

  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleBuyNow = (product) => {
    addToCart(product); 
    alert("You have been redirected to the cart!"); // Placeholder alert
  };


  const handlePriceFilterChange = (min, max) => {
    setPriceFilter({ min, max });
  };


  const handleLogin = (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          
          setLoginMessage('Login successful! Token received: ' + json.token);
        } else {
          setLoginMessage('Login failed: Invalid credentials.');
        }
        setEmail('');
        setPassword('');
        setIsLoginVisible(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoginMessage('An error occurred during login.');
      });
  };

  return (
    <Container>
      <Box className="scrolling-background">
        <Navbar cartItems={cartItems} /> 
        <Box className="content" sx={{ padding: '2rem 0' }}>
          <Categories onSelectCategory={setSelectedCategory} />
          <ProductList 
            selectedCategory={selectedCategory} 
            addToCart={addToCart} 
            priceFilter={priceFilter} 
            setPriceFilter={handlePriceFilterChange} 
            onBuyNow={handleBuyNow} 
          />
          
          {/* Button to toggle login form */}
          <Box sx={{ marginBottom: '1rem', textAlign: 'center' }}>
            <Button variant="contained" onClick={() => setIsLoginVisible(!isLoginVisible)}>
              {isLoginVisible ? 'Hide Login' : 'Show Login'}
            </Button>
          </Box>

          {/* Login Form */}
          {isLoginVisible && (
            <Card sx={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Login</Typography>
                <form onSubmit={handleLogin}>
                  <Box sx={{ marginBottom: '1rem' }}>
                    <TextField
                      fullWidth
                      label="Email (Username)"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Box>
                  <Box sx={{ marginBottom: '1rem' }}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Box>
                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Display login message */}
          {loginMessage && (
            <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
              <Typography color="error">{loginMessage}</Typography>
            </Box>
          )}
        </Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default App;
