import React, {useState} from 'react';


const Carousel = () => {

  // create an array of assets to display inside carousel
  let carouselArr = [1,2,3,4,5];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100)
  };
  const goRight = () => {
    x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100)
    
  }


  return (
    <div className="carousel">
      {
        carouselArr.map((item, index) => {
          return <div key={index} className="carousel-item"
          style={{transform: `translateX(${x}%)`}}
          >{item}</div>
        })
      }
      <button id="goLeft" onClick={goLeft}>left</button>
      <button id="goRight" onClick={goRight}>right</button>
    </div>
  )
}

export default Carousel