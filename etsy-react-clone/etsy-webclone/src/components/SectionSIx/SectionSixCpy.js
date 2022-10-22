
import React ,{useState,useEffect}from 'react'
import   "../Header/Header.css"


function SectionFive(props) {
  const [state,setState] = useState(0)
  useEffect((a)=>{

  })
  console.log(state)
    const Object = props.arrayObj
    console.log(Object.cards[1])
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
                           <img src={Object.cards[state].imgSrc}  alt=""/>                          </div>
                          <button onClick={e=>setState(e=>e+1<5?e+1:0)} style={{paddingBottom:"20px"}}>Click Me</button>
                         </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
export default SectionFive
