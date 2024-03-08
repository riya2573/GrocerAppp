import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import Herobanner from '../assets/herobanner.png';
import { Carousel } from 'react-responsive-carousel';
import Logo from "../assets/logo.png"


const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg:'160px', xs: '70px'}, ml: { sm: '50px'}}} 
        position="relative" 
        p="20px">
        <Typography color="red" 
        fontWeight="600" 
        fontSize="26px" 
        lineHeight="35px">
            Grocery Comparing Store
        </Typography>
        <Typography fontWeight={700} 
        lineHeight="35px" 
        sx={{ fontSize:{ lg: '44px', xs: '40px'}}}
        mb="23px" 
        mt="30px">
            ONE STOP SHOP 
        </Typography>
        <div style={{fontFamily:"Dancing Script", fontWeight:"700", fontSize:"30px",lineHeight:"35px" }} 
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}>
            For All Daily Needs
            </div>
        <Typography fontSize="22px" 
        lineHeight="70px" 
        mb={4}>
            Check out the best deals all round the year!!!
        </Typography>
        <Button variant="contained"
        color="success" 
        href="#grocery" 
        sx={{padding: '10px'}}>
            Search Products
            </Button>
        <Typography fontWeight={600}
        color="#ff2625"
        sx={{opacity: 0.1,
            display: { lg: 'block', xs: 'none'},
            padding: "10px",
        }}
        fontSize="200px">
            Grocer
            </Typography>
            <img src={Herobanner} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner