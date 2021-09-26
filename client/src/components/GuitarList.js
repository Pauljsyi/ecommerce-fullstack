import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GuitarItem from './GuitarItem'

const GuitarList = () => {
  const [guitars, getGuitars] = useState([])
  const url = 'http://127.0.0.1:5000/guitars'

  console.log('guitars',guitars)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log('response', response.data.length)
        // attempt to display only relevant guitars from database
      //   for (let i = 0; i < 7; i++){
      //     const guitarsdata = response.data[i];
      //   getGuitars(guitarsdata);
      //   // console.log('guitars', guitars[0])
      // }
      getGuitars(response.data);
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
      guitars && guitars.length > 0 ? (guitars.map((guitar, index) => 
      <GuitarItem item={guitar} key={index}/>)) : null
    }
    </div>
  )
}

export default GuitarList
