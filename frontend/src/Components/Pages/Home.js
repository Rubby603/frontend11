import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
  
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center"
       
      >
        <div className="bg-black   bg-opacity-50 p-6 sm:p-10 rounded-lg shadow-lg"
         style={{ backgroundImage: "url('/images/shop2.jpg')" }}>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to Our Store
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-3">
            Find the best deals on trendy fashion and more!
          </p>
          <button
            className="  mt-5 px-6 py-3 bg-[#FFD700]  hover:bg-blue-700 transition-all duration-300 text-white font-medium rounded-lg shadow-lg hover:scale-105" 
          
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-[#111827] py-12 text-center text-white">
        <h3 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">
          Limited Time Offer!
        </h3>
        <p className="text-lg sm:text-xl mt-2">Get up to 50% off on selected items.</p>
        <button className="mt-4 px-6 py-3 bg-white text-[#111827] font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
          Go to shop
        </button>
      </div>
    </div>
  );
};

export default Home;
