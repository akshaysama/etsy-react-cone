import React from 'react'
import dataBase from "../dataBase.json"
let Object 
dataBase.map((obj)=>{
    if(obj.name==="SectionSevenCard"){
        Object = obj
    }return Object
})
function SectionSeven() {
  return (
    <div className="section-seven-main-container">
      <div className="section-seven-main-container-child">
        <span className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
             <path d="M1400 0l-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z"></path>
       </svg>
        </span>
        <div className="footer-section-container">
            <h2 className="footer-section-h2-tag">
                   {Object.h2tag}
            </h2>
            <a  href="n" className="footer-a-tag">
               {Object.atag}
            </a>
            <div className="footer-section-content-container">
                {
                   Object.textContent.map((obj2)=>{
                    return <div className="footer-cards-container">
                        <div className="footer-cards-container-child">
                            <h3 className="cards-h3-tag">
                                {obj2.h3tag}
                            </h3>
                            <p className="footer-p-tag">{obj2.ptag}</p>
                            {obj2.link?<div className="footer-card-two-link-container"><a href="h" className="footer-card-a"><span>{obj2.link}</span></a></div>:null}
                        </div>
                    </div>

                   })
                }
            </div>
        </div>
        <div className="section-seven-cards-last">
            <h4 className="section-seven-h4-tag">
                {Object.h4tag}
            </h4>
            <a href="a" >{Object.atag2}</a>
        </div>
      </div>
    </div>
  )
}

export default SectionSeven
