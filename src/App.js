import React from "react";
import "./style.css";
import Header from './components/common/header/Header'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Products from './components/pages/products/Products'
import Contact from './components/pages/contact/Contact'
import Shop from './components/pages/shop/Shop'
import Login from './components/pages/loginpages/Login'

import ProductDetails from "./components/pages/cart/ProductDetails"

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/common/footer/Footer'

import {BrowserRouter, Routes, Route} from  'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/product" element={<Products/>} />   
            <Route path="/contact" element={<Contact/>} />   
            <Route path="/shop" element={<Shop/>} />   
            <Route path="/login" element={<Login/>} />   
            <Route path="/cart/:id"  element={<ProductDetails/>} />

          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
