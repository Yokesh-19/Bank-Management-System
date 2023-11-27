import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const SidebarHome = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const sidebarStyle = {
    width: '240px',
  };

  const listItemStyle = {
    paddingLeft: '24px',
  };
  const goInfo = () => {
    navigate('/go');
    toggleSidebar();
  };

  const goacademics=()=>{
    navigate('/academics');
    toggleSidebar();
  }
  const goexams=()=>{
    navigate('/exams');
    toggleSidebar();
  }
  const goadmin=()=>{
    navigate('/admin');
    toggleSidebar();
  }
  const goplacement=()=>{
    navigate('/placements');
    toggleSidebar();
  }
  const goabout=()=>{
    navigate('/about');
    toggleSidebar();
  }
 

  return (
    <>
    <Drawer variant="temporary" anchor="left" open={isOpen} onClose={toggleSidebar} >
      <div style={sidebarStyle}>
          <div >
            <AccountBalanceIcon style={{height:'70px',width:'70px',border:'2px solid black',borderRadius:'50%',marginLeft:'50px'}}></AccountBalanceIcon></div>
        <List>
          <ListItem button onClick={goInfo} style={listItemStyle}>
            <ListItemText primary="Queries" />
          </ListItem>
          
          <ListItem button  onClick={goexams} style={listItemStyle}>
            <ListItemText primary="Donations" />
          </ListItem>
          <ListItem button onClick={goplacement} style={listItemStyle}>
            <ListItemText primary="Loans" />
          </ListItem>

        </List>
      </div>
      </Drawer>
      </>
  );
};

export default SidebarHome;
