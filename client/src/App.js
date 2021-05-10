import React from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import GuitarList from './components/GuitarList'


function App() {

  
  return (
    <div className="container">
      <Navbar  />
      <Carousel /> 
      <Products />
      <GuitarList />
    </div>
  )
};

export default App;