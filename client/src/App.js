import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import GuitarList from './components/GuitarList';
import Cart from './components/Cart';
import Card from './components/Card';
import ProductDetails from './components/ProductDetails';
import { useState } from 'react';



function App() {
  // const {item} = props
  const {products} = GuitarList;
  // console.log('data', GuitarList)
  const [cartItems, setCartItems] = useState([]);
  // console.log("cartItems in App.js", cartItems)
  
  const onAdd=(product) => {
    // console.log("product", product.id)
    const exist = cartItems.find(x => x.id===product.id);
    // console.log('x', x)
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      )
  } else {
      setCartItems([...cartItems, {...product, qty:1 }])
    }
  }
  const onRemove = (product) => {
    const exist =cartItems.find((x) => x.id=== product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      )
    }
  }

  return (
    <div className="container">   
      {/* <Cart /> */}
      <Navbar onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      {/* <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> */}
      <Carousel /> 
      <GuitarList onAdd={onAdd} />
      
    </div>
  )
};

export default App; 