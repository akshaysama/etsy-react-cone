import React from 'react'
import dataBase from "../dataBase.json"
let Object
dataBase.map((obj)=>{
  if(obj.name==="cardSection6"){
    Object = obj
  }
})
function Section6() {
  return (
    <div className="section-six-container">
      <div className="section-six-container-child">
        <div className="section-six-h2-tag-container">
          <h2 className="section-six-h2-tag">
             {Object.h2tag}
          </h2>
        </div>
        <div className="section-six-card-container-parent">
          {
            Object.Cards.map((obj2)=>{

          
              return   <div className="section-six-card-main-container"> 
            <div className="section-six-card-container">
              <div className="section-six-image-container">
                       <img src={obj2.imgSrc} alt={obj2.id}  />
              </div>
              <div className="section-six-text-container">
                  <p className="p-tag">{obj2.ptag}</p>
                  <p className="ptag-two">{obj2.text}</p>
              </div>
            </div>
            </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Section6
