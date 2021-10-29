import React from 'react'

const Card = ({title, imageUrl, body}, props) => {
  const {onAdd} = props
  console.log("price", body)

  return (
    <main>
      {title != null ? 
      <div className="container">
          <div className="container-cards">
            <div className="card-container">
              <div className="image-container">
                <img src={imageUrl} alt='Card Image' />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h3 className="c-title">{title}</h3>
                </div>
                <div className="card-price">
                  ${body}
                </div>
              </div>

              <div className="btn">
                <button onClick={onAdd}>
                  <a className="add-to-cart" onAdd={onAdd}>
                    add to cart
                  </a>
                </button>
              </div> 
            </div>
          </div>
        </div>
      : null}
    </main>
  )
} 

export default Card
