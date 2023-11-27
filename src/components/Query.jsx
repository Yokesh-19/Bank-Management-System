import React, { useState } from 'react';
import './Loginpage.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p style={{marginTop:'100px',width:'80%',marginLeft:'10%',fontSize:'20px'}}>
      Balance Inquiry: Queries are used to check and display account balances for customers.
Transaction History: Customers can view their transaction history, including deposits, withdrawals, and transfers.
Transaction Processing:

Transaction Verification: Queries are essential for verifying and processing transactions, ensuring the integrity and accuracy of financial data.
Loan Approval and Management:

Credit Scoring: Queries help assess a customer's creditworthiness, considering factors such as credit score, income, and debt.
Loan Status: Queries are used to check the status of loan applications and manage approved loans.
Fraud Detection:

Anomaly Detection: Queries can be employed to identify unusual patterns or suspicious activities in account transactions, aiding in fraud detection.</p>
        <div className='containerlogin' style={{marginTop:'70px'}}>
          <div>
            <label>Email</label>
            <input
              type='email'
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <label>Query</label>
            <input
              type='text'
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div>
            <Button variant="contained" type='submit' style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginTop: '15px' }}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Loginpage;
