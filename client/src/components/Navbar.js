import React from 'react'


const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo" style={{color: "red"}}>Paradigm Guitar</div>
        <ul className="cart">
          <li>
            <h5>My Cart</h5>
          </li>          
          <li>Order Details</li>
          <li>Order Total</li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar