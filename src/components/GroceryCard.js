import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const GroceryCard = ({ grocery }) => {
  return (
    <Link className="grocery-card" 
    to={`/grocery/${grocery.product_id}`}>
      <img src={grocery.product_photos[0]}
      alt={grocery.product_title} 
      loading="lazy" 
      />
      <Typography variant="h5"
      color="black"
      sx={{ margin: "0.5rem 5%"}}>
        {grocery.product_title}
      </Typography>
      <Typography variant="h6"
      color="#384F34"
      sx={{ margin: "0.5rem 5%"}}>
        Store:{grocery.offer.store_name}
      </Typography>
      <Typography variant="h6"
      color="#384F34"
      sx={{ margin: "0.5rem 5%"}}>
        Reviews:{grocery.product_num_reviews}
      </Typography>
      <Typography variant="h4"
      color="red"
      sx={{ margin: "0.5rem 5%"}}>
        {grocery.offer.price}
      </Typography>
      </Link>
      )
      }

export default GroceryCard