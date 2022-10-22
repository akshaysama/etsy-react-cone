import React from 'react'
import dataBase from "../dataBase.json"
import   "../Header/Header.css"


function SectionFive(props) {
    const Object = props.arrayObj
    console.log(props)
  return (
    <div className="section-five-container">
      <div className ="section-five-container-child">
        <div className="section-five-container-text">
            <h2 className="h2-section-five">
                {Object.h2tag}
            </h2>
            <div className="text-div-section-five">
                {Object.text}
            </div>
        </div>
        <div className="section-five-container">
            <div className="section-five-container-child">
                {
                    Object.cards.map((obj2)=>{
                 return  <div className="section-five-cards">
                          <div className="section-five-cards-container">
                            <img src={obj2.imgSrc} alt={obj2.id}/>
                            <div className="section-five-text-container">
                                {obj2.text}
                            </div>
                          </div>
                         </div>

                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFive
