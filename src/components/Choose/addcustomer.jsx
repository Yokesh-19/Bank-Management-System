import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  const styles = {
    container: {
      marginTop:"100px",
      backgroundColor: '#f0f0f0',
      padding: '20px',
    },
    informationText: {
      color: 'black',
      fontSize: '20px',
      marginTop: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border:'.2px solid black',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width:'400px',
      marginLeft:'500px',
      padding:'23px'
    },
    formGroup: {
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    submitButton: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '12px',
      fontSize: '18px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
    },
    copyrightText: {
      marginBottom: '20px',
      height: '50px',
      width: '100%',
      backgroundColor: 'lightgray',
      marginTop: '20px',
      padding: '10px',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.informationText}>
        <p>
          Fill in the necessary information, which may include your name, email address, password, and any other
          required details. Some platforms might also ask for additional information like a phone number.
        </p>
        <p>Check your email or text messages for a verification code and enter it on the website.</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Enter Full Name</label>
          <input style={styles.input} type="text" onChange={(event) => setUsername(event.target.value)} required />
        </div>
        <div style={styles.formGroup}>
          <label>Enter 6 Digit Account Number</label>
          <input style={styles.input} type="password" required />
        </div>
        <div style={styles.formGroup}>
          <label>Enter Branch</label>
          <input style={styles.input} type="password" required />
        </div>
        <div>
          <Button style={styles.submitButton} variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>

      <p style={styles.copyrightText}>
        Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
      </p>
    </div>
  );
};

export default Loginpage;
