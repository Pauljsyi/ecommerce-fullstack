import React from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'


function App() {

  
  return (
    <div className="container">
      <Navbar  />
      <Carousel /> 
      <Products />
    </div>
  )
};

export default App;