import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loginpage from '../Loginpage';
import Navbar from '../Navbar';
import Sidebarhome from '../Sidebarhome';
import Home from '../Home';
import Studentusername from '../Query';
import Exams from '../Exams/Donation';
import PlacementDetailsPage from '../Images/Loan';
import ChooseUs from '../Choose/addcustomer';
import Transaction from '../Academics/Transaction';
import Login1 from '../Login1'
import Register from '../Register';
const LoginRouting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const isHomePage = ['/home', '/gostudentinformation', '/academics', '/exams', '/admin', '/placements', '/choose', '/about','/go','/','/Login1','/register']
    .includes(location.pathname);

  return (
    <>
      {isHomePage && (
        <>
          <Sidebarhome isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <Navbar toggleSidebar={toggleSidebar} />
        </>
      )}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/go' element={<Studentusername />} />
        <Route path='/academics' element={<Transaction />} />
        <Route path='/Login1' element={<Login1 />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/admin' element={<Home/>} />
        <Route path='/placements' element={<PlacementDetailsPage />} />
        <Route path='/choose' element={<ChooseUs/>} />
        
      </Routes>
      <>
      <footer/>
      </>
    </>
  );
};

export default LoginRouting;
