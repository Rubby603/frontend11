import React from "react";
import { Layout } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Cart from "../Pages/Cart";
import ProductTable from "../Pages/productTable";
import SignUp from "../Pages/SignUp";
import ProductDetails from "../Card/more";

const { Content } = Layout;

const AppContent = ({ cart, setCart }) => { 


  return (
    <Content className="p-6 md:p-12">
      <div
        className="bg-white dark:bg-gray-800 min-h-screen p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 mt-10"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/ProductTable" element={<ProductTable />} />
          <Route path="/profile" element={<Profile />} />    
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Content>
  );
};

export default AppContent;
