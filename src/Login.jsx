
import React, { useState } from "react";
import api from "./api"; // axios instance
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();// to stop page reload and keep the flow of single page applications intact
    try {
      const res = await api.post("/login", { email, password });
      alert("Login successful");
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
