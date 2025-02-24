import React from'react';
import { useState } from'react';
import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import {Route,Routes } from 'react-router-dom';
import Product from './component/Product';
import About from './component/About';
import Buyproduct from './component/Buyproduct';
import { Cart } from './component/Cart';
import Login from './component/Login';
function App() {
  const [count, setCount] = useState(0);
  const[cartdata,setCartdata] = useState([]);
  const increment = (product) => {
    setCount(count + 1);
    const newCart = [...cartdata,product];
    setCartdata(newCart);
  };
  return (
    <div>
       
      <Nav count={count}/>
  
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/buyproduct/:id" element={<Buyproduct  increment={increment}/>}/>
      <Route path="/cart/:id" element={<Cart cartdata={cartdata}/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
