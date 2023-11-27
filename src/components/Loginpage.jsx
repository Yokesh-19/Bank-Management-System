import React, { useState } from 'react';
import './Loginpage.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onHandleRegister = () => {
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };


  return (  
    <>

      <form onSubmit={handleSubmit}>
        <div className='containerlogin'>
          <div>
            <label>Email</label>
            <input type='email' onChange={(event) => { setUsername(event.target.value) }} required />
          </div>
          <div>
            <label>Password</label>
            <input type='password' required />
          </div>
          <div>
            <Button variant="contained" type='submit'>Login</Button>
          </div>
          <div>
            Don't Have an Account?
            <Button variant="outlined" style={{ marginLeft: '5px' }} onClick={onHandleRegister}>Register</Button>
          </div>
        </div>
      </form>
          {/* <p style={{marginBottom:'200px',height:'50px', width:'100%',backgroundColor:'darkblue',marginTop:'160px',position:'fixed'}}>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p> */}
    </>
  );
};

export default Loginpage;
