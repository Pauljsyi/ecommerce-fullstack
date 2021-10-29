import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Cart = (props) => {
    const {cartItems, onAdd} = props;
    console.log('cartItems', cartItems)

    console.log('cart props', props)
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
        </aside>
    )
}

export default Cart
