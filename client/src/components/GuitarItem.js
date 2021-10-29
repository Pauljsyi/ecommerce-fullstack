import React from 'react'
import Card from './Card'

const GuitarItem = (props) => {
  const {item, onAdd} = props
  console.log('item from Products', props)



   return (
    <div className="guitar-container">
      <Card 
        title={item && item.id > 8 ? item.name : null}
        imageUrl={item && item.id > 8 ? item.img : null}
        body={item && item.id > 8 ? item.price : null}
        onAdd={onAdd}
      />
    </div>
  ) 
}

export default GuitarItem
