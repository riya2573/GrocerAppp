import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import GroceryDetail from "./components/GroceryDetail";


const App = () => {
  return (
    <Box width="400px" 
    sx={{ width: { xl: '1488px'}}} 
    m="auto">
      <Navbar />
      <Routes>
        <Route path="/" 
        element={<Home />} />
        <Route path="/grocery/:id"
        element={<GroceryDetail />} />
    </Routes>
    </Box>
  )
}

export default App