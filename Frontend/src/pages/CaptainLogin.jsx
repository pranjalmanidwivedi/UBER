import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email, 
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);

    if(response.status === 200){
      const data = response.data

      setCaptain(data.captain);
      localStorage.setItem("token",(data.token));
      navigate('/captain-home');
    }


    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg mb-2 font-medium">What's your email</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-medium">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-medium py-2 px-4 rounded w-full text-lg placeholder:text-base mb-3">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to={"/captain-signup"} className="text-blue-600">
            Sign up as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#d46c13] text-white font-medium py-2 px-4 rounded w-full text-lg placeholder:text-base mb-7 flex justify-center items-center"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
