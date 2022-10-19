import dataBase from "../dataBase.json"
import {useState,useEffect} from "react"
import React from 'react'
import "./Header.css"
let headerObject
dataBase.map((a)=>{
    if(a.name==="header"){
    headerObject = a
    }
    return headerObject
})

function Header() {
    const [isFocus, setFocus] = useState(null)
  return (
    <div className="header-container">
        <div className="etsy-logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" aria-hidden="true" focusable="false"><path d={headerObject.headerEtsyLogoPath} ></path></svg>
        </div>
        <div className="header-signin-components-container">
            <div className="header-signin">
               {headerObject.headerSignInText}
            </div>
            <div className="header-heart-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={headerObject.headerHeartSvg}></path></svg>
            </div>
            <div className="header-basket-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
             <path d={headerObject.headerBasketSvg}></path>
             </svg>
            </div>
        </div>
        <div className="header-search-input-container">
            <div className="header-menu-bar-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={headerObject.headerHambergerMenu}></path>
            </svg>
            </div>
            <div className="header-input-container">
                <div  className="header-input-container-child">
                    <input className="section-one-input-class" type="text" placeholder="Search for anything"onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} />
                    <button className="button-header-input">
                        <span className="header-button-span">
                        <svg className ="input-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{fill:isFocus?'white':'black'}}><path d={headerObject.headerSearchSvgPath1}></path><path d={headerObject.headerSearchSvgPath2}></path></svg>
                        </span>
                    </button>
                </div>

            </div>
        </div>
      
    </div>
  )
}
export default Header
