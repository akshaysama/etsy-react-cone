import React from 'react'
import dataBase from "../dataBase.json"
let Object
dataBase.map((obj)=>{
    if(obj.name==="cardsFifthSection"){
        Object = obj 
    }
})
function MainSection4() {
  return (
    <div className="section-four-main-container">
      <div className="section-four-main-container-child">
        <div className="section-four-cards-container">
            <div className="section-four-heading-container">
                <h3 className="section-four-heading">
                    {Object.h2tag}
                </h3>
                <h2 className="section-four-h3">
                {Object.text}
                </h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection4
