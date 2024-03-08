import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { fetchBestProductsData,bestProductOptions } from '../utils/fetchBestProduct'
import { useState,useEffect } from 'react'
import { Star } from '@mui/icons-material';
const BestProducts = () => {
    const [bestProducts,setBestProducts] = useState({});

    useEffect(() => {
        const fetchBestProducts= async () => {
            const bestProducturl= await fetchBestProductsData(
                'https://real-time-amazon-data.p.rapidapi.com/best-sellers?category=grocery&page=1&country=IN',bestProductOptions
            )

            setBestProducts(bestProducturl);
            console.log(bestProducturl)
        }

        fetchBestProducts();
    },[])
  return (
    <Stack alignItems="center" 
    mt="37px" 
    justifyContent="center" 
    p="20px">
        <Typography fontWeight={700} 
        sx={{fontSize: {lg: "44px",xs: "30px"}}} 
        mb= "50px">
            Best Products
        </Typography>

        <Stack direction="row"
        sx={{ gap: { lg:"110px", xs:"50px"}}}
        flexWrap="wrap"
        justifyContent="center">
            {bestProducts?.data?.best_sellers.slice(0, 10)?.map((best) => (
                <a href={best.product_url}>
                    <Box className="best-products">
                        <img src={best.product_photo}
                        alt="#"
                        className="best-product-image" />
                        <Typography variant="h5"
                        color="black"
                        sx={{ margin: "0.5rem 5%"}}>
                        {best.product_title}
                        </Typography>
                        <div className="rating">
                        <span>{best.product_star_rating}</span>
                        <Star sx={{ color: "#FBBF24", width: "20px"}} />
                        </div>
                    </Box>
                </a>
            ))}

        </Stack>
    </Stack>
  )
}

export default BestProducts