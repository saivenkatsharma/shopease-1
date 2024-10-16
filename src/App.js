import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import './styles.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="App">
      <Navbar />
      <Categories onSelectCategory={setSelectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
