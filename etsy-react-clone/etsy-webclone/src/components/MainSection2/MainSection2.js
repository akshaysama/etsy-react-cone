
import "../Header/Header.css"

import React from 'react'
import PriceComponent from "../MainSection3/PriceComponent"


function MainSection2(props) {
let SecondCardObject = props.arrayObj
console.log(props)
  return (
    <div className ="second-card-section-container" style = {props.style}>
      <div className="second-card-section-container-child">
        <div className="second-card-section-text-container" style={props.style5}>
            <p className="ptag-one-second-section" style={props.style6}>{SecondCardObject.secondCardSectionPtag}</p>
            <h1>{SecondCardObject.secondCardSectionH2}</h1>
            <p className="second-card-ptag-two">{SecondCardObject.secondCardPtagTwo}</p>
            </div>
            {
                SecondCardObject.cards.map((obj,idx)=>{
                    return <div className="second-card-image-container " style={props.style4} key={obj.id}>
                                 <div className="second-card-image-container-child" >
                                 <PriceComponent price ={{price:obj.Price,discount:obj.discount,currency:obj.currencySymbol}} style={{left:"7px",bottom:"-4px"}} />
                                    <div className="heart-svg-container">
                                    <div className="heart-svg-container-child">
                                         
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={SecondCardObject.heartSvg}></path></svg>
                                        </div>
                                        </div>
                                    {idx===0|idx===2|idx===3? <div className="second-card-play-button" ><span style ={{paddingLeft:"5px"}} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points={SecondCardObject.svgPlayButton}></polygon></svg></span></div>:null}
                                    <div className="second-card-image-container-child-child">
                                        <img src={obj.imgSrc} alt="cards"  style={props.style2} />
                                    </div>
                                 </div>
                          </div>
                })
            }
            <div className="second-card-section-text-child">{SecondCardObject.secondLastText}</div>
     <div className="anchortag-container"><a href="#" className="second-card-anchor-tag" >{SecondCardObject.lastText}</a></div>  
      </div>
    </div>
  )
}

export default MainSection2
