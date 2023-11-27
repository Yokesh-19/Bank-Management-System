import React from 'react';

const Transaction = () => {
  const students = [
    { name: 'John Doe', Bankid: '001', amount: 7540 },
    { name: 'Sathyamangalam sunil', Bankid: '002', amount: 800 },
    { name: 'Vikranth', Bankid: '003', amount: 6000 },
    { name: 'Jhonny', Bankid: '004', amount: 500 },
    { name: 'Surya aditya', Bankid: '005', amount: 85000 },
    { name: 'Sunil arunesh', Bankid: '006', amount: 50000 },
    { name: 'Saran ', Bankid: '007', amount: 1000 },
    
      ];

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px',marginTop:'100px',border:'1px solid black',padding:'10px',borderRadius:'10px'}}>
      <h2>Transaction History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Bank ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px' }}>{student.name}</td>
              <td style={{ padding: '8px' }}>{student.Bankid}</td>
              <td style={{ padding: '8px' }}>Rs.{student.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
