import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Navbar = ({ toggleSidebar }) => {

  const navigate=useNavigate();
  const onchange=()=>{
      navigate('/home');
  }
  const onchoose=()=>{
      navigate('/choose');
  }
  const transaction=()=>{
      navigate('/academics');
  }
  const Login1=()=>{
      navigate('/Login1');
  }

  return (
    <>
    <AppBar position="fixed" style={{backgroundColor:'black'}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          edge="start"
        >
          <MenuIcon />
        </IconButton>

        <div style={{marginRight:'13px'}}>
              <AccountBalanceIcon style={{height:'70px',width:'70px',border:'2px solid white',borderRadius:'50%',marginLeft:'50px',color:'white'}}></AccountBalanceIcon>
        </div>
        <Typography variant="h6" noWrap >
            ABC Bank 
        </Typography> 
        <Button onClick={onchange} style={{color:'white',marginLeft:'750px'}}>Home</Button>
        <Button onClick={onchoose} style={{color:'white'}}>Add Customer</Button>
        <Button onClick={transaction} style={{color:'white'}}>Transaction History</Button>
        <Button onClick={Login1} style={{color:'white'}}>Login</Button>
        
      </Toolbar>
    </AppBar>
    </>

  );
};
export default Navbar;

