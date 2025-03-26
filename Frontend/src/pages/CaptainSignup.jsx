import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");


  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
        
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }


    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleCapacity("");
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
          <h3 className="text-lg mb-2 font-medium">What's your Name</h3>

          <div className="flex gap-4">
            <input
              className="bg-[#eeeeee] rounded w-1/2 mb-7 px-4 py-2 border text-lg placeholder:text-base"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] rounded w-1/2 mb-7 px-4 py-2 border text-lg placeholder:text-base"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </div>

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

          <h3 className="text-lg mb-2 font-medium">Enter vehicle details</h3>

          <div className="flex gap-4">
          <input
            className="bg-[#eeeeee] rounded w-1/2 mb-7 px-4 py-2 border text-lg placeholder:text-base"
            required
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            type="text"
            placeholder="Vehicle Color"
          />
          <input
            className="bg-[#eeeeee] rounded w-1/2 mb-7 px-4 py-2 border text-lg placeholder:text-base"
            required
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            type="text"
            placeholder="Vehicle Plate Number"
          />
          </div>

          <div className="flex gap-4">
          <input
            className="bg-[#eeeeee] rounded w-1/2 mb-7 px-4 py-2 border text-lg placeholder:text-base"
            required
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            type="text"
            placeholder="Vehicle Capacity"
          />
          <select
            className="bg-[#eeeeee] rounded w-1/2 mb-7 px-4 py-2 border text-lg placeholder:text-base"
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="Auto">Auto</option>
          </select>
          </div>

          <button className="bg-[#111] text-white font-medium py-2 px-4 rounded w-full text-lg placeholder:text-base mb-3">
            Sign Up
          </button>
        </form>

        <p className="text-center">
          Alread have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CaptainSignup;
