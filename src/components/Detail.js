import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
const Detail = ({ groceryDetail }) => {
  return (
    <Stack gap="60px"
    sx={{ flexDirection: { lg:"row"}, p: "20px", alignItems: "center"}}>
        <img src={groceryDetail?.data?.product.product_photos[0]}
        alt="name"
        loading='lazy'
        className='detail-image'/>
        <Stack sx={{ gap: { lg:"35px", xs:"20px"}}}>
        <Typography variant='h3'>
            {groceryDetail?.data?.product.product_title}
        </Typography>
        <Typography variant='h6'>
            {groceryDetail?.data?.product.product_description}
        </Typography>
        <Stack direction="row"
        gap="30px"
        alignItems="center">
            <Typography variant='h4'>
                Store: {groceryDetail?.data?.product.offer.store_name} 
            </Typography>
            <Typography variant='h4'
            color="red">
             {groceryDetail?.data?.product.offer.price}   
            </Typography>
        </Stack>
        <a href={groceryDetail?.data?.product.offer.offer_page_url}>
            <Button color='success'
            variant='contained'
            sx={{ width: { lg: "180px", xs: "160px" } }}>
                Take me there!!!
            </Button>
        </a>
        </Stack>
    </Stack>
  )
}

export default Detail