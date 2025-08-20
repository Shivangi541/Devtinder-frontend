import React from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from './Login';
import { useEffect } from 'react';
import api from './api';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

  const navigate = useNavigate();
  const fetchUserData= async ()=>{
    if (userData) return; // If userData is already present, no need to fetch
    try{
       const response = await api.get("/user",{
        withCredentials: true
       });
       dispatch(addUser(response.data));
       console.log("User data fetched successfully:", response.data);
    }catch(err){
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
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