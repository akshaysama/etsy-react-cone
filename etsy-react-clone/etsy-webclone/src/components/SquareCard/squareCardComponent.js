import React from 'react'
import SquareCard from "./SquareCard"
import dataBase from "../dataBase.json"
import "./SquareCardComponent.css"
import SeeMoreButton from "./SeeMoreCardsButton"
import SquareCardEditorsPick from "./EditorsPick"
let Object
dataBase.map((obj)=>{
    if(obj.name==="squareCards"){
    Object = obj.cardsImgSrc
    }

  })
  console.log(Object)
function squareCardComponent() {
  return (
    <div className="squareCardsection">
        <div className="square-card-section-container">
            <div className="square-card-section-conatainer-border">
          <div className='square-card-section-container-child'>
            <SquareCardEditorsPick />
        {
            Object.map((img)=>{
                console.log(img.imgSrc)
             return   <SquareCard image = {img.imgSrc}/>
            })
        }

    </div>
    <SeeMoreButton />
    </div>
    </div>
    </div>
  )
}
export default squareCardComponent
