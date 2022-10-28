import React from 'react'

function PriceComponent(props) {
 
    let data =   props.price.discount
    let priceData=props.price.price
    let splitArray =priceData.replace(',',"")
    let realPrice = parseInt(splitArray)
    let discountPrice = (realPrice * data)/100
    discountPrice = parseInt(realPrice - discountPrice)
    let discountPricestring =discountPrice.toString()
    console.log(typeof discountPricestring)
   let discountStringArray =  discountPricestring.split('')
   console.log(discountStringArray)
let priceLength = discountStringArray.length -3
console.log(discountStringArray)
discountStringArray.splice(priceLength,0,',')
let newPrice = discountStringArray.join('')
console.log(newPrice)
  return (
    console.log(props),
      <p className="price-component-container" style={props.style}>
           <span className="price-component-span-container">
       
              {props.price.discount? 
                 <span className="price-component-span-container">
                  <span className="discount-price-span"> ₹ {newPrice}</span>
                   <span style={{textDecoration:'line-through'}} className="real-price-container">
                <span className="rupees-container" style={{fontWeight:"100"}}>
                {props.price.currency}
                </span>
                <span className="price-tag" style={{fontWeight:"100"}}>
                {props.price.price}  
                </span>
                </span>
                </span>:   <span className="price-component-span-container">
                   <span className="real-price-container">
                <span className="rupees-container">
                {props.price.currency}
                </span>
                <span className="price-tag">
                {props.price.price}  
                </span>
                </span>
                </span>}
            </span>
      
      </p>
  )
}

export default PriceComponent
