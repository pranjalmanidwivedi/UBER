import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div>
      <img className='w-16 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>

        <h3  
        className="text-lg mb-2 font-medium">What's your email</h3>

        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         type="email" name="email" placeholder="email@example.com" />

        <h3 className="text-lg mb-2 font-medium">Enter password</h3>

        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         type="password" name="password" placeholder="password" />

        <button className="bg-[#111] text-white font-medium py-2 px-4 rounded w-full text-lg placeholder:text-base mb-3">Login</button>

      </form>
      <p className="text-center">Don't have an account? <Link to={'/user-signup'} className="text-blue-600">Sign up</Link></p>
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#10b461] text-white font-medium py-2 px-4 rounded w-full text-lg placeholder:text-base mb-7 flex justify-center items-center">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
