import React from 'react'
import Card from './Card'
import luthier from '../featured/luthier.jpg'
import test from '../featured/test.jpeg'
import custom from '../featured/custom.jpg'
import axios from 'axios'

const Products = () => {

  // axios.get('/guitars')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     console.log("THIS IS UR ERROR",error)
  //   })

  return (
    <div className="product-container">
      <Card 
        title='Card Title'
        imageUrl={luthier}
        body='Lorem Ipsum'
      />
      <Card 
        title='Card Title'
        imageUrl={test}
        body='Lorem Ipsum'
      />
      <Card 
        title='Card Title'
        imageUrl={custom}
        body='Lorem Ipsum'
      />
      
    </div>
  )
}

export default Products
