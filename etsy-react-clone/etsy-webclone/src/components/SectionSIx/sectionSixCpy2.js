
import React ,{useState,useEffect}from 'react'
import   "../Header/Header.css"


function SectionFive(props) {
  const [state,setState] = useState(true)
  useEffect((a)=>{

  })

  console.log(state)
    const Object = props.arrayObj
    console.log(Object.cards[1])
    const imgRender = ()=>{
        return state?<img src= {Object.cards[0].imgSrc} />: <img src= {Object.cards[1].imgSrc} />
            
       }
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
                
                      <div className="section-five-cards">
                          <div className="section-five-cards-container">
                                  {imgRender()}             
                          </div>
                          <button onClick={e=>setState(!state)} style={{paddingBottom:"20px"}}>Click Me</button>
                         </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
export default SectionFive
