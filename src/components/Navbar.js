import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Button} from '@mui/material';
import Logo from '../assets/logo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (
   <Stack direction="row"
   justifyContent="space-around" 
   sx={{ gap:{ sm: '122px', xs: '40px'}, 
   mt: { sm:'32px', xs:'20px'}, justifyContent:'none'}} 
   px="20px">
    <Link to="/">
      <img src={Logo} 
      alt="logo" 
      style={{width: '190px', 
      height: '190px', 
      margin:'-100px 5px'}}/>
      </Link>
      <Link to="/"
      style={{ textDecoration: "none",
      color: "#000",
      fontSize: "24px",
      paddingTop: "10px"}}>
        Home
      </Link>
        {isAuthenticated ? (
          <Button variant='contained'
          color='success'
          onClick={() =>
          logout({ logoutParams: {returnTo: window.location.origin}})}
          sx={{ marginRight: "20px"}}>
            LogOut
            </Button>
        )
      :(
        <Button variant='contained'
        color='success'
        onClick={() => loginWithRedirect()}
        sx={{ marginRight: "20px"}}>
          LogIn
        </Button>
      )}
   </Stack>
  );
};

export default Navbar