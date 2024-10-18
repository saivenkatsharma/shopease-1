import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Stack } from '@mui/material';

const Categories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: 'center',
        marginBottom: 4,
      }}
    >
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="contained"
          color="primary"
          onClick={() => onSelectCategory(category)}
          sx={{
            textTransform: 'capitalize',
            borderRadius: '20px',
            backgroundColor: '#64b5f6',
            '&:hover': {
              backgroundColor: '#42a5f5',
            },
          }}
        >
          {category}
        </Button>
      ))}
    </Stack>
  );
};

export default Categories;
