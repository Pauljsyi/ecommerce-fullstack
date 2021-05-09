import React from 'react'
import Card from './Card'
import luthier from '../featured/luthier.jpg'
import test from '../featured/test.jpeg'
import custom from '../featured/custom.jpg'

const Products = () => {
  return (
    <div>
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
