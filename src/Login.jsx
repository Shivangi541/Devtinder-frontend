import React from 'react';
import { useState } from 'react';
import axios from "axios";
const Login = () => {
  const [email , setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async ()=>{
    try{
    const res = await axios.post("http://localhost:3000/login",{
      email,password
    })
    console.log("login successful!!",res.data);
    alert("login successful");
    }
    catch(error){
      console.log(error);
    }
    
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-primary text-primary-content w-96 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold">Login</h2>
          <div className="space-y-4 mt-4">
            {/* Email */}
            <label className="input validator bg-white text-black flex items-center gap-2 rounded-md px-3 py-2">
              <svg
                className="h-[1em] opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                value={email}
                className="bg-transparent outline-none flex-1"
                onChange={(e)=>setEmailId(e.target.value)}
              />
            </label>
            <div className="validator-hint hidden text-xs text-red-500">
              Enter valid email address
          
            </div>

            {/* Password */}
            <label className="input validator bg-white text-black flex items-center gap-2 rounded-md px-3 py-2">
              <svg
                className="h-[1em] opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={password}
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                className="bg-transparent outline-none flex-1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </label>
            <p className="validator-hint hidden text-xs text-red-500">
              Must be more than 8 characters, including
              <br />At least one number
              <br />At least one lowercase letter
              <br />At least one uppercase letter
            </p>
          </div>

          {/* Button */}
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-secondary w-full "onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
