import  dataBase from "../dataBase.json"
import "../Header/Header.css"

import React from 'react'
let SecondCardObject
dataBase.map((a)=>{
    if(a.name==="CardsSecondSection"){
   SecondCardObject = a
  
    }
     return SecondCardObject
   
})
console.log(SecondCardObject)

function MainSection2() {
  return (
    <div className ="second-card-section-container">
      <div className="second-card-section-container-child">
        <div className="second-card-section-text-container">
            <p>{SecondCardObject.secondCardSectionPtag}</p>
            <h1>{SecondCardObject.secondCardSectionH2}</h1>
            </div>
            {
                SecondCardObject.cards.map((obj,idx)=>{
                    return <div className="second-card-image-container" key={obj.id}>
                                 <div className="second-card-image-container-child">
                                    <div className="heart-svg-container">
                                    <div className="heart-svg-container-child">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={SecondCardObject.heartSvg}></path></svg>
                                        </div>
                                        </div>
                                    {idx===0|idx===2|idx===3? <div className="second-card-play-button" ><span style ={{paddingLeft:"5px"}} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points={SecondCardObject.svgPlayButton}></polygon></svg></span></div>:null}
                                    <div className="second-card-image-container-child-child">
                                        <img src={obj.imgSrc} alt="cards"  />
                                    </div>
                                 </div>
                          </div>
                })
            }
     <div className="anchortag-container"><a href="#" className="second-card-anchor-tag" >{SecondCardObject.lastText}</a></div>  
      </div>
    </div>
  )
}

export default MainSection2
