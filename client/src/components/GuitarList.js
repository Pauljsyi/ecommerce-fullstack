import React, {useState, useEffect} from 'react'
import axios from 'axios'

const GuitarList = () => {
  const [guitars, getGuitars] = useState([])

  const getAllGuitars =  () => {
    console.log('request was sent')

   axios.get('/guitars')
   .then(response => {
        console.log('this is ur response', response)
      })
      .catch(error => {
        console.log('this is ur error py1', error)
      })
  }

  useEffect(() => {
    getAllGuitars()
  }, [])

  // getAllGuitars()

  // const getGuitars = () => {
  //   axios.get('/guitars')
  //   .then(response => {
  //     console.log(response)
  //     setData(response)
  //   })
  //   .catch(error => {
  //     console.log('py1', error)
  //   })
  // }

  // getGuitars();

  
  return (
    <div>
      List of Guitars
      <ul>
        {
          guitars.map(guitar => {
            <li>{guitar.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default GuitarList
