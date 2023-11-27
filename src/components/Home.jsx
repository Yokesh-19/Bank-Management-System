import React from 'react';
import cool from './Images/vector1bank.jpg'
import MuiCard from './MuiCard'
const Dashboard = () => {
  const dashboardStyles = {
    marginTop: '100px',
    marginLeft: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
    backgroundImage: "url('')",
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '610px', 
    width: '90%', 
  };
  
  return (
    <>
    
    <div style={dashboardStyles}>
    <div style={{width:"500px",height:"300px",position:"absolute",top:"80px",color:"black",fontSize:'25px'}}>
    <div style={{position:'relative',left:'10px',top:"80px"}}>     
    <MuiCard/>
    </div>
   
      </div>
      <img src={cool} alt='image' height={'750px'} width={'1550px'} style={{marginRight:'-1000px',marginTop:'-75px',marginBottom:'-45px',marginLeft:'-100px'}}></img>
        </div>
        <div style={{height:'400px',backgroundColor:'grey'}}>

          <div style={{fontSize:"20px",marginLeft:"20px",textAlign:"center"}}>
      <p style={{height:'400px', width:'100%',backgroundColor:'gray',marginTop:'65px',color:'white',backgroundColor:'gray',padding:'5px',height:'20px'}}>
        Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>
        <p>Cookies Settings
          Terms & Conditions<br></br>
          <br></br>
          Privacy Policy<br></br><br></br>
          Contact Us<br></br><br></br>
          Customer Piracy<br></br><br></br>
          Security</p>
          </div>
        </div>
        <>
      </> 
    </>
  );
};

export default Dashboard;
