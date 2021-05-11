import React from 'react'
import Card from './Card'
import luthier from '../featured/luthier.jpg'
import test from '../featured/test.jpeg'
import custom from '../featured/custom.jpg'
import axios from 'axios'

const Products = (props) => {
  const {item} = props
  console.log('item from Products', props)

  // if (guitars.length > 0) {
    // console.log(guitars)
  // }
  



  // console.log('this is ur props',props.name)

  return (
    <div className="product-container">
   
    {
      
    }
      <Card 
        title={item ? item.name : null}
        imageUrl={item ? item.img : null}
        body={item ? item.price : null}
      />
      {/* <Card 
        title='Card Title'
        imageUrl={test}
        body='Lorem Ipsum'
      />
      <Card 
        title='Card Title'
        imageUrl={custom}
        body='Lorem Ipsum'
      /> */}
      
    </div>
  )
}

export default Products
