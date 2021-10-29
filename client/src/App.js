import React from 'react'
import GuitarItem from './components/GuitarItem'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import GuitarList from './components/GuitarList'
import Cart from './components/Cart'
import { useState } from 'react';



function App() {

  return (
    <div className="container">
      <Navbar />
      <Carousel /> 
      <GuitarList />
    </div>
  )
};

export default App;