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
import Register from './component/Register';
import Contact from './component/Contact';
import Footer from './component/Footer';

import axios from 'axios';
function App() {
  const [count, setCount] = useState(0);
  const[cartdata,setCartdata] = useState([]);
  const [username,setUsername ] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const increment = (product) => {
   { /*
    const newCart = [...cartdata,product];
    setCartdata(newCart); */}
    setCount(count + 1);
    axios.post('http://localhost:3001/buyproduct',{product})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };
  return (
    <div>
       
      <Nav count={count} authenticated ={authenticated} setAuthenticated ={setAuthenticated} />
  
     <Routes>
      <Route exact path="/" element={<Home username = {username} authenticated ={authenticated}/>}/>
      <Route path="/product" element={<Product authenticated ={authenticated} setAuthenticated ={setAuthenticated}/> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/buyproduct/:id" element={<Buyproduct  increment={increment}/>}/>
      <Route path="/cart/:id" element={<Cart cartdata={cartdata}/>}/>
      <Route path="/login" element={<Login username = {username} setUsername = {setUsername}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
