import React from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from './Login';
import { useEffect } from 'react';
import api from './api';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();
  const fetchUserData= async ()=>{
    try{
       const response = await api.get("/user",{
        withCredentials: true
       });
       dispatch(addUser(response.data));
       console.log("User data fetched successfully:", response.data);
    }catch(err){
      console.error("Error fetching user data:", err);
    }


  }
  useEffect(() => {
    fetchUserData();
  },[]);
  return (
    <div>
        <NavBar />
        <Outlet/>
        <Footer />
      
    </div>)};
    
  
  

export default Body