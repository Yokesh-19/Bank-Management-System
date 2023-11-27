import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const InputForm = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setId('');
    setAmount('');
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '3px',
      border: '1px solid #ccc',
      marginBottom: '8px',
    },
    submitButton: {
      fontSize: '20px',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
    },
    tableContainer: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>ID</label>
          <input style={styles.input} type='text' value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div style={styles.formGroup}>
          <label>Donation Amount</label>
          <input style={styles.input} type='number' value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <Button style={styles.submitButton} variant="contained" type='submit'>
            Submit
          </Button>
        </div>
      </form>

      {/* Table for query-related problems */}
      <TableContainer component={Paper} style={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Donation Amount</TableCell>
              <TableCell>Account Holder</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Replace the data below with your actual query-related data */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>$50</TableCell>
              <TableCell>Surya</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>Sunil</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InputForm;
