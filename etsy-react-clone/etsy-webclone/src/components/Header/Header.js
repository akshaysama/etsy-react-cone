import dataBase from "../dataBase.json"
import React from 'react'
import "./Header.css"
let headerObject
dataBase.map((a)=>{
    if(a.name==="header"){
    headerObject = a
    }
})

function Header() {
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
                    <input type="text" placeholder="Search for anything" />
                    <button className="button-header-input">
                        <span className="header-button-span">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={headerObject.headerSearchSvgPath1}></path><path d={headerObject.headerSearchSvgPath2}></path></svg>
                        </span>
                    </button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Header
