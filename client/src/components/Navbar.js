import React from 'react'


const Navbar = () => {
  return (
    <div>
      <nav>
        <h1 className="logo">Paradigm Guitar</h1>
        <div className="cart">
        <i className="fas fa-shopping-cart"></i>
        <ul className="cart-content"> 
          <li>
            <h3 className ="my-cart">My Cart</h3>
            
          </li>          
          <li>Order Details</li>
          <li>Order Total</li>
        </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar