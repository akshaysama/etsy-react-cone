import React from 'react'
import "../Header/Header.css"
import dataBase from "../dataBase.json"
import Heart from "../HeartSvg/Heart"
import PriceComponent from "./PriceComponent"
 let Object
dataBase.map((obj)=>{
   if(obj.name==="cardThree"){
    Object = obj
   }return Object
})
function MainSection3(props) {
  return (
    console.log(props.array),
    <div className="main-section-three">
        <div className ="main-section-three-child">
          
            <div className="third-section-cards-container">
                <div className="third-section-cards-container-child">
                    {  
                    props.array.map((obj)=>{
                       return <div className="third-section-flexbox-one-container" style={props.style}>
                        <div className="third-section-flexbox-first-row">
                                     <div className="third-section-first-row-first-component">
                                      
                                             <div className="third-section-first-row-first-component-container">
                                             <Heart />
                                             <PriceComponent price = {{price:props.array[0].Price1,currency:props.array[0].currencySymbol,discount:props.array[0].discount1}}/>
                                             {<img src={obj.img1Src} />}
                                             </div>
                                     </div>
                            <div className="third-section-first-row-second-component">
                         
                                <div className="third-section-first-row-second-component-container">
                                    <PriceComponent price={{price:props.array[0].Price2,currency:props.array[0].currencySymbol}} />
                                <Heart/>
                             {<img src={obj.img3Src} />}
                                </div>
                            </div>
                        </div>
                        <div className="third-section-flexbox-second-row">

                            <div className="third-section-flexbox-second-row-container">
                                <PriceComponent price={{price:props.array[0].Price3,currency:props.array[0].currencySymbol}} />
                            <Heart />

                                  <img src={obj.img3Src} />
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

export default MainSection3
