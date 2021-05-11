import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Products from './Products'
import Card from './Card'

const GuitarList = () => {
  const [guitars, getGuitars] = useState([])
  const url = 'http://127.0.0.1:5000/guitars'

  console.log('guitars',guitars)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        getGuitars(response.data)
        console.log('guitars', guitars[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  


// ===============================
  // useEffect(() => {
  //   getAllGuitars()
  // }, [])

  // const getAllGuitars =  () => {
  //   // console.log('request was sent')
  //  axios.get(url)
  //  .then(response => {
  //       console.log('this is ur response', response.data)
  //       const allGuitars = response.data
  //       getGuitars(allGuitars)
  //     })
  //     .catch(error => {
  //       console.log('this is ur error', error)
  //     })
  // }

  // console.log("guitars state",guitars.name)

  
  return (
    <div className="product-container">
    {
      guitars && guitars.length > 0 ? (guitars.map((guitar, index) => <Products item={guitar} key={index}/>)) : null
    }
      
      
    </div>
  )
}

export default GuitarList
