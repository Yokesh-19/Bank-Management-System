import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from './AuthContext';

const Form = ({children}) => {
    const navigate = useNavigate();
    const [username, setuser] = useState('');
    const [pass, setpass] = useState('');

    const move = () => {
        navigate('/home');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("http://localhost:3005/users").then(result => {
            const userFound = result.data.find(user => user.username === username && user.password === pass);
            if (userFound) {
                move();
                alert('Login successful');
            } else {
                alert('Incorrect username/password');
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
            // Handle error scenario if necessary
        });
    };

    const styles = {
        container: {
            textAlign: 'center',
            fontSize: '30px',
            height: '400px',
            padding: '20px',
            width: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid black',
            marginTop: '200px',
            backgroundColor: '#f7f7f7', // Light gray background color
        },
        form: {
            marginTop: '20px', // Spacing between form and border
        },
        label: {
            marginBottom: '8px', // Spacing below labels
            display: 'block',
            color: '#333', // Text color
        },
        input: {
            marginBottom: '16px', // Spacing below input fields
            fontSize: '16px',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '3px',
            border: '1px solid #ccc',
            backgroundColor: '#fff', // White background color
        },
        button: {
            fontSize: '15px',
            padding: '12px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
        },
        orText: {
            fontSize: '20px',
            color: '#333', // Text color
        },
        registerButton: {
            fontSize: '15px',
            padding: '12px',
            cursor: 'pointer',
            backgroundColor: '#2196F3', // Blue background color
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            marginTop: '20px', // Spacing above Register button
        },
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} method="POST" onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="Email">
                    Username:
                </label>
                <input
                    style={styles.input}
                    type="text"
                    name="Email"
                    id="Email"
                    onChange={(e) => { setuser(e.target.value) }}
                    placeholder="Enter your email"
                />

                <label style={styles.label} htmlFor="Number">
                    Password:
                </label>
                <input
                    style={styles.input}
                    type="password"
                    name="Number"
                    id="Number"
                    onChange={(e) => { setpass(e.target.value) }}
                    placeholder="Enter your password"
                />

                <button style={styles.button} type="submit">
                    Submit
                </button>
            </form>

            {/* <p style={styles.orText}>------or------</p> */}
            <p style={{ fontSize: "15px" }}>Don't have an account</p>
            <button
                style={styles.registerButton}
                onClick={() => {
                    navigate('/register');
                }}
            >
                Signup
            </button>
        </div>
    );
};

export default Form;
