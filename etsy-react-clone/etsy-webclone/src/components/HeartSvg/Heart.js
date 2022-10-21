import dataBase from "../dataBase.json"
import "../Header/Header.css"
import React from 'react'
let SecondCardObject
dataBase.map((a)=>{
    if(a.name==="CardsSecondSection"){
   SecondCardObject = a
  
    }
    
     return SecondCardObject
   
})


function Heart() {
  return (  
<div className="heart-svg-container">
<div className="heart-svg-container-child">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={SecondCardObject.heartSvg}></path></svg>
    </div>
    </div>
  )
}

export default Heart
