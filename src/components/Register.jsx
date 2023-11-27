import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [email,setEmail]=useState('');
  

    const handleSubmit = async (event) => {
        event.preventDefault();
            const response=await axios.post('http://localhost:3005/users',{
                username:username,
                password:password,
                email:email,
            });
        navigate('/home');
        alert('Account Created');
    };
    
    const styles = {
        container: {
            marginTop:'150px',
            textAlign: 'center',
            paddingTop: '50px',
            fontSize: '20px'
        },
        form: {
            display: 'inline-block',
            textAlign: 'left',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        },
        label: {
            marginBottom: '5px',
            display: 'block'
        },
        input: {
            marginBottom: '10px',
            fontSize: '16px',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '3px',
            border: '1px solid #ccc'
        },
        button: {
            fontSize: '20px',
            padding: '10px',
            cursor: 'pointer',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '3px'
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} method="POST" onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="User">
                    User:
                </label>
                <input style={styles.input} type="text" name="User" id="User" onChange={(event)=>{ setusername(event.target.value); }} />

                <label style={styles.label} htmlFor="Email">
                    Email:
                </label>
                <input style={styles.input} onChange={(event)=>{ setEmail(event.target.value)}} type="text" name="Email" id="Email" />

                <label style={styles.label} htmlFor="Password">
                    Password:
                </label>
                <input style={styles.input} type="password" name="Password" id="Password" onChange={(event)=>{ setpassword(event.target.value); }} />

                <label style={styles.label} htmlFor="ConfirmPassword">
                    Confirm Password:
                </label>
                <input
                    style={styles.input}
                    type="password"
                    name="ConfirmPassword"
                    id="ConfirmPassword"
                />

                <button style={styles.button} type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
