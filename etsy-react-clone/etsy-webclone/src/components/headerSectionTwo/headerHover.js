import React, {useState} from 'react'
import dataBase from "../dataBase.json"
let Object
dataBase.map((a)=>{
    if(a.name==="headerUl"){
    Object = a
    }
})
function HeaderHover() {
    const [hover, setHover] = useState(false)
  return (
    <div className="header-hover-div">
      <div className="header-hover-container">
        <div className="header-hover-container-child-one">
           <ul className="header-ul">
            <div className="header-hover-list-div">
                {Object.firstSectionDivContent}
            </div>
            {
           Object.firstSection.map((a)=>{
            return <li><span className="header-li-span">{a}</span><span className="svg-container-header-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span></li>
           })
            }
           </ul>
        </div>
        <div className="header-hover-container-child-two">
      <div className="header-second-part">
        <ul className="header-ul-second-part-first">
            {
                Object.secondSection.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </ul>
        <ul className="header-ul-seecond-part-two">
            {
                Object.thirdSection.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </ul>
      </div>
      <div className="header-part-two-last-section">
        <div className="header-part-two-last-section-child">
            <div className="header-part-two-last-section-container">
                {
            Object.fourthSection.map((a)=>{
              return  <div className="image-container-header-hover">
                   <div className="hover-header">
                    <img src={a.src} alt="ring" />
                   </div>
                   <div className="header-image-text-container">{a.text}</div>
                   <div className="header-image-text-container">{a.textTwo}</div>
              </div>
                })}
             
            </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHover
