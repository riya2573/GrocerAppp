import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';
import Grocery from '../components/Grocery';
import SearchGrocery from '../components/SearchGrocery';
import HeroBanner from '../components/HeroBanner';
import BestProducts from '../components/BestProducts';

const Home = () => {
  const [grocery, setGrocery] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <BestProducts />
      <SearchGrocery
      setGrocery={setGrocery}/>
      <Grocery
      grocery={grocery}
      setGrocery={setGrocery}/>
    </Box>
  )
}

export default Home