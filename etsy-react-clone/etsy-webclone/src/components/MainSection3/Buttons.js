import React from 'react'
import "../Header/Header.css"
import dataBase from "../dataBase.json"
 let Object
dataBase.map((obj)=>{
   if(obj.name==="cardThree"){
    Object = obj
   }return Object
})
function SliderSection() {
  return (

<div className="buttons parent">

 <div className="main-section-three-h2-container">
 <div className ="main-section-three-h2-container-child">
     <h2 className="main-section-h2-class">{Object.h2Tag}</h2>
 </div>
</div>
<div className="slider-section-three">
 <div className="silder-section-three-child">
     { 
     Object.sliderTags.map((obj)=>{
    return  <button className="section-three-button-one" >
         <p>{obj}</p>
     </button>
     })
          
     }
    
 </div>
</div>
</div>
  )
    }

    export default SliderSection