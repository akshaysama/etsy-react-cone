import React from 'react'
import "./SquareCard.css"

function SquareCard(props) {

  return (
    <div className="square-cards-main-container">
      <div className="square-card-container">
         <img src={props.image} alt="imag" />
      </div>
    </div>
  )
}

export default SquareCard
