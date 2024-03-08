import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { groceryOptions, fetchData } from '../utils/fetchData';
import Grocery from './Grocery'

const SearchGrocery = () => {
  const [search, setSearch] = useState('')
  const [grocery, setGrocery] = useState([]);
  

  const handleSearch = async () => {
    if(search) {
      const groceryData = await fetchData(`https://real-time-product-search.p.rapidapi.com/search?q=${search}&country=in&language=en`, groceryOptions );

      setGrocery(groceryData);
      setSearch("");
    }
    else { alert("Please enter a product name."); }
      
  }
  return (
    <Stack alignItems="center" 
    mt="37px" 
    justifyContent="center" 
    p="20px">
      <Typography fontWeight={700} 
      sx={{fontSize: { lg: '44px', xs: '30px'}}}
      mb="50px" 
      textAlign="center">
        Search All You <br /> NEED.
      </Typography>
      <Box position="relative" 
      mb="72px">
        <TextField sx={{input: { fontWeight: '700',
            border: 'none',
            borderRadius: '6px'
          },
          width: {
            lg: '800px',
            xs: '350px'
          },
          backgroundColor: '#fff',
          borderRadius: '4px'

        }} 
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Products...."
        type="text"
        />
        <Button variant='contained'
        color="success"
        sx={{textTransform: 'none',
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: "absolute",
          right: '0px'
        }}
        onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Grocery setGrocery={setGrocery} grocery={grocery} />
       

    </Stack>
  )
}

export default SearchGrocery