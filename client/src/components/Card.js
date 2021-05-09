import React from 'react'

const Card = ({title, imageUrl, body}) => {


  return (
    <div className="container-cards">
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt='Card Image' />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            {body}
          </div>
        </div>

        <div className="btn">
          <button >
            <a>
              add to cart
            </a>
          </button>
        </div> 
      </div>
    </div>
  )
} 

export default Card
