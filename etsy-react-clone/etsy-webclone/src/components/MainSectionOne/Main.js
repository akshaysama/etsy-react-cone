import dataBase from "../dataBase.json"
import React from "react"
import "../Header/Header.css"

let CardObject
dataBase.map((cardObj)=>{
  if(cardObj.name === "cardSection"){
    CardObject = cardObj
  }
  return CardObject
 
})
let Cards = CardObject.Cards
console.log(Cards)
function Main() {
  return (
    <div className="cards-section-parent-container">
      <div className="text-main-section">
        <h2>{CardObject.mainSectionText}</h2>
      </div>
      <div className = "main-card-section-container">
        {
           Cards.map((Obj2)=>{
     return <div className ="cards-main-container" key={Obj2.id}>
         <div className="cards-image-container">
            <img src={Obj2.imgSrc} alt={Obj2.id} />
         </div>
         <div className="card-name">
            <p>{Obj2.CardName}</p>
         </div>
      </div>
           })
        }
      </div>
    </div>
  )
}

export default Main
