import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({});

  const naviget = useNavigate()

  const token = sessionStorage.getItem("token");

  const profile = async () => {
    try {
      const respons = await axios.get("https://dummyjson.com/user/me", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });
      setUser(respons.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    profile()
  }, [])
  return (
    <div className="bg-gray-500 h-[100vh] pt-15">
      <div className="max-w-md mx-auto  p-6 bg-blue-300 rounded-2xl shadow-lg">
        <h2 className="text-center text-cyan-950">Profile</h2>
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.image}
            alt={`${user.userName}'s avatar`}
            className="w-26 h-30 rounded-full object-cover border border-amber-50 p-1"
          />
          <div>
            <h2 className="text-xl font-bold">{user.userName}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Maiden Name:</strong> {user.maidenName}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Birth Date:</strong> {user.birthDate}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <button className="bg-white py-1 px-5 rounded-xl" onClick={()=> naviget('/')}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
