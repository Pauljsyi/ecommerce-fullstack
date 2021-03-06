import React from 'react'
// import Card from './Card'
import { useState } from 'react';
import {Link} from 'react-router-dom'


const GuitarItem = (props) => {
  // const [cartItems, setCartItems] = useState([]);
  const {item, onAdd} = props
  // console.log("item", item)



   return (
    <div className="guitar-container">
      <main>
      {item.price != 0 ? 
        <Link to={`/product/${item.id}`}>
          <div className="container">
            <div className="container-cards">
              <div className="card-container">
                <div className="image-container">
                  <img src={item && item.id > 8 ? item.img : null} alt='Card Image' />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h3 className="c-title">{item && item.id > 8 ? item.name : null}</h3>
                  </div>
                  <div className="card-price">
                    ${item && item.id > 8 ? item.price : null}
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => onAdd(item)}>
                    add to cart
                  </button>
                </div> 
              </div>
            </div>
          </div> 
        </Link>
      : null}
       
      </main>
      {/* <Card 
        title={item && item.id > 8 ? item.name : null}
        imageUrl={item && item.id > 8 ? item.img : null}
        body={item && item.id > 8 ? item.price : null}
        // onAdd={onAdd}  
      /> */}
    </div>
  ) 
}

export default GuitarItem
