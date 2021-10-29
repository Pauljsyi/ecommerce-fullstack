import React from 'react';
import Cart from './Cart';
import { useState } from 'react';

const Navbar = () => {
  //DELETE
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
        setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty +1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...products, qty: 1}]);
    }
  }

  return (
    <div>
      <nav>
        <a href="#/" >
          <h1 className="logo">Paradigm Guitar</h1>
          <h6>HOME</h6>
          <h6>ABOUT</h6>
          {/* <h6>REVIEWS</h6> */}
          <h6>SHOP</h6>
          <h6>GALLERY</h6>
          {/* <h6>VIDEOS</h6> */}
          <h6>CUSTOM ORDER</h6>
          <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            <a className="cart-content"> 
              <Cart onAdd={onAdd} cartItems={cartItems}/>
            </a>
          </div>
        </a>
      </nav>
    </div>
  )
}

export default Navbar