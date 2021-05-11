import React from 'react'
import Card from './Card'

const GuitarItem = (props) => {
  const {item} = props
  console.log('item from Products', props)


   return (
    <div className="product-container">
      <Card 
        title={item && item.id > 8 ? item.name : null}
        imageUrl={item && item.id > 8 ? item.img : null}
        body={item && item.id > 8 ? item.price : null}
      />
    </div>
  ) 
}

export default GuitarItem
