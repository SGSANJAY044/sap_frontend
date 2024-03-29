import React from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Event from './Pages/Event/Event';
import Request from './Pages/Request/Request';
import Report from './Pages/Report/Report';
import StaffRegister from './Pages/StaffRegister/StaffRegister';
import Image from './Pages/Report/Image';
function AllRoutes() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home` ' element={<Home/>}></Route>
        <Route path='/event' element={<Event/>}></Route>
        <Route path='/request' element={<Request/>}></Route>
        <Route path='/report' element={<Report/>}></Route>
        <Route path='/staff/register' element={<StaffRegister/>}></Route>
        <Route path='/Image' element={<Image/>}></Route>
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default AllRoutes;
