import React from 'react'
import "../Header/Header.css"
import dataBase from "../dataBase.json"
 let Object
dataBase.map((obj)=>{
   if(obj.name==="cardThree"){
    Object = obj
   }return Object
})
function MainSection3() {
  return (
    <div className="main-section-three">
        <div className ="main-section-three-child">
            <div className="main-section-three-h2-container">
                <div className ="main-section-three-h2-container-child">
                    <h2 className="main-section-h2-class">{Object.h2Tag}</h2>
                </div>
            </div>
            <div className="slider-section-three">
                <div className="silder-section-three-child">
                    { 
                    Object.sliderTags.map((obj,i)=>{
                   return  <button className="section-three-button-one" key={Object.Cards[i].id}>
                        <p>{obj}</p>
                    </button>
                    })
                         
                    }
                   
                </div>
            </div>
            <div className="third-section-cards-container">
                <div className="third-section-cards-container-child">
                    <div className="third-section-flexbox-one-container">
                        <div className="third-section-flexbox-first-row">
                           { Object.Cards.map((obj)=>{    
                            if(obj.id===1){
                            
                                     return <div className="third-section-first-row-first-component">
                                             <div className="third-section-first-row-first-component-container">
                                                <img src={obj.id===1?obj.imgSrc:null}  alt="pot"/>
                                             </div>
                                          </div>
                                    
                                      }return null})}
                          
                            <div className="third-section-first-row-second-component">
                                <div className="third-section-first-row-second-component-container">
                                    {
                                        Object.Cards.map((obj2)=>{
                                            if(obj2.id===2){
                                               return <img src={obj2.imgSrc} alt="img2"/>
                                            }return null
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="third-section-flexbox-second-row">
                            <div className="third-section-flexbox-second-row-container">
                            {
                                Object.Cards.map((obj3)=>{
                                    if(obj3.id === 3){
                                        return <img src = {obj3.imgSrc} alt="img3" />
                                    }return null
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div className="third-section-flexbox-two">
                        <div className="third-section-flexbox-two-container">
                            <div className="third-section-flexbox-two-row-one-container">
                                <div className="third-section-flexbox-two-row-one-container-child">
                                    {
                                        Object.Cards.map((Obj4)=>{
                                            if(Obj4.id===4){
                                                return <img src={Obj4.imgSrc} alt="image4" />
                                            }
                                          
                                        })
                                    }
                                </div>
                            </div>
                            <div className="third-section-flexbox-two-row-two-container">
                                <div className="third-section-flexbox-two-row-two-container-child">
                                    <div className="third-section-flexbox-two-component-one-container">
                                        <div className="third-section-flexbox-two-component-one-child-container">
                                   
                                        </div>
                                    </div>
                                    <div className="third-section-flexbox-two-row-two-component-container">
                                        <div className="third-section-flex-box-two-component-two-container">
                                            <div className="third-section-flexbox-two-component-two-child">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default MainSection3
