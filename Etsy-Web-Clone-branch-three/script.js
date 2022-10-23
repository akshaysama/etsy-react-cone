// console.log( require('./dataBase'))
import dataBase from "./dataBase.js"
// import dataBase, { find, map } from "./dataBase.js";
let countIdx = 0
// const dataBase = [
//   {
//     name: "svg",
//     path: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" aria-hidden="true" focusable="false"><path d="M6.547,3.125v6.008c0,0,2.117,0,3.25-0.086c0.891-0.156,1.055-0.242,1.219-1.133l0.328-1.305h0.969l-0.164,2.852 l0.086,2.922h-0.977l-0.242-1.141c-0.242-0.812-0.57-0.977-1.219-1.055c-0.812-0.086-3.25-0.086-3.25-0.086v5.039 c0,0.969,0.492,1.383,1.625,1.383h3.414c1.055,0,2.109-0.086,2.766-1.625l0.883-1.953h0.82c-0.086,0.406-0.492,3.984-0.57,4.789 c0,0-3.086-0.078-4.383-0.078H5.25l-3.492,0.078v-0.883l1.133-0.25c0.82-0.164,1.062-0.406,1.062-1.055 c0,0,0.086-2.195,0.086-5.852c0-3.648-0.086-5.844-0.086-5.844c0-0.727-0.242-0.891-1.062-1.055L1.758,2.555V1.664l3.414,0.07h6.5 c1.297,0,3.484-0.234,3.484-0.234s-0.078,1.375-0.164,4.625h-0.891l-0.328-1.141c-0.32-1.461-0.805-2.188-1.703-2.188H6.961 C6.547,2.797,6.547,2.875,6.547,3.125z M19.703,3.766h0.977V7.18l3.336-0.164l-0.164,1.547l-3.25-0.25v6.016 c0,1.703,0.57,2.359,1.547,2.359c0.883,0,1.539-0.492,1.781-0.898l0.484,0.57c-0.484,1.133-1.859,1.703-3.164,1.703 c-1.617,0-2.93-0.969-2.93-2.836V8.398h-1.938V7.586C18.008,7.422,19.219,6.445,19.703,3.766z M26.695,14.242l0.648,1.547 c0.242,0.648,0.812,1.305,2.109,1.305c1.383,0,1.953-0.734,1.953-1.625c0-2.766-5.445-1.953-5.445-5.688c0-2.109,1.703-3.094,3.898-3.094c0.977,0,2.438,0.164,3.172,0.492c-0.164,0.812-0.25,1.867-0.25,2.68l-0.805,0.078l-0.57-1.625 c-0.164-0.398-0.82-0.727-1.625-0.727c-0.977,0-1.953,0.406-1.953,1.461c0,2.516,5.609,1.953,5.609,5.688c0,2.117-1.867,3.25-4.148,3.25c-1.703,0-3.414-0.656-3.414-0.656c0.164-0.969,0.086-2.023,0-3.086H26.695z M33.031,22.039 c0.242-0.891,0.406-2.023,0.57-3.086l0.891-0.078l0.328,1.703c0.078,0.406,0.32,0.734,0.969,0.734c1.055,0,2.438-0.648,3.742-2.922 c-0.578-1.383-2.281-5.844-3.828-9.258c-0.406-0.898-0.484-0.977-1.047-1.141l-0.414-0.156v-0.82l2.445,0.086l3-0.164V7.75 l-0.734,0.164c-0.57,0.078-0.805,0.398-0.805,0.727c0,0.086,0,0.164,0.078,0.328c0.156,0.492,1.461,4.141,2.438,6.578c0.805-1.703,2.352-5.523,2.594-6.172c0.086-0.328,0.164-0.406,0.164-0.648c0-0.414-0.242-0.656-0.805-0.812L42.039,7.75V6.938 l2.281,0.078l2.109-0.078V7.75l-0.406,0.32c-0.812,0.328-0.898,0.406-1.219,1.062l-3.57,8.359 c-2.117,4.797-4.312,5.203-5.852,5.203C34.406,22.695,33.672,22.445,33.031,22.039z"></path></svg>',
//     tag:"",
//   },
//   {
//     name: "signin",
//     content: "Sign in",
//     tag:""
//   },
//   {
//     name: "span-luv-svg",
//     path: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"style="margin-top:2px;"height="24px" width="24px"focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>',
//     tag:"",  
//   },
//   {

//     name: "header-basket",
//     path: `<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="24px" width = "24px" style="margin-right:3px; margin-top:5px">
//          <path d="M21 10a1 1 0 00-1-1h-3c.059-.682.287-4.44-1.611-6.555A4.363 4.363 0 0012 1a4.363 4.363 0 00-3.394 1.445C6.709 4.56 6.937 8.318 7 9H4a1 1 0 00-1 1c0 .752.008 7.413 1.12 9.478 1.416 2.622 5.92 3.474 7.88 3.474 2.12 0 6.61-1.024 7.888-3.492C20.992 17.326 21 10.74 21 10zm-5.307 7l.283-1.283.159-.717h2.651a25.487 25.487 0 01-.251 2h-2.842zM5.457 17c-.1-.586-.183-1.27-.248-2h2.656l.159.717L8.307 17h-2.85zm4.519-1.717L9.914 15h4.173l-.063.283c-.13.585-.258 1.162-.378 1.717h-3.292c-.119-.554-.247-1.13-.377-1.717h-.001zM9.479 13a39.761 39.761 0 01-.376-2H14.9c-.087.564-.22 1.256-.376 2H9.479zm9.446 0h-2.362c.152-.748.278-1.43.354-2h2.075a61.73 61.73 0 01-.067 2zM10.1 3.78A2.412 2.412 0 0112 3a2.412 2.412 0 011.9.78c1.205 1.338 1.2 4.145 1.1 5.113a.928.928 0 00.01.106H8.984a.923.923 0 00.01-.106c-.101-.968-.102-3.775 1.106-5.114zM7.083 11c.076.57.2 1.252.354 2H5.073a61.441 61.441 0 01-.066-2h2.076zm-.844 8h2.483c.108.562.191 1.061.237 1.457A6.514 6.514 0 016.239 19zm4.756 1.885A13.506 13.506 0 0010.756 19h2.489c-.123.62-.203 1.25-.239 1.881-.334.044-.67.068-1.006.071a8.66 8.66 0 01-1.005-.067zm4.049-.445c.046-.394.129-.886.235-1.44h2.489a6.655 6.655 0 01-2.724 1.44z"></path>`,
//     tag:"",
//         },
//   {
//     name: "header-toggle-bar",
//     path: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="margin:1px;" aria-hidden="true" focusable="false">
//       <path d="M20 7H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm-4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h11.2c.6 0 1 .4 1 1s-.4 1-1 1zm4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
//     </svg>`,
//     tag:"",
//   },
//   {
//     name: "header-search-bar-svg",
//     path: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24px" width="24px" style="margin-right:22px;" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg>',
//     tag:"", 
//    },
//   {
//     name: "text-header",
//     text: "  Discover One-of-a-kind items from independent creators",
//     tag:"",
//   },
//   {
//     name:"discover-item-component",
//     path:"	https://i.etsystatic.com/16676438/c/1954/1954/0/0/…/2054a3/1825350041/il_300x300.1825350041_rvfe.jpg",
//     text:"Diwali",

    
//   },
//   {
//     name:"discover-item-component",
//     path:"	https://i.etsystatic.com/24440180/r/il/cc8bc7/3094624694/il_300x300.3094624694_64up.jpg",
//     text:"Home & Living", 

//   },
//   {
//     name:"discover-item-component",
//     path:"	https://i.etsystatic.com/25473399/r/il/6cfb1f/4088005474/il_300x300.4088005474_foea.jpg",
//     text:"Clothing",
  
 
//   },
//   {
//     name:"discover-item-component",
//     path:"https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg",
//     text:"Jewellery",
  
//     },
//   {
//     name:"discover-item-component",
//     path:"https://i.etsystatic.com/30213933/c/1510/1510/342/…/ea97e0/3755997843/il_300x300.3755997843_9z68.jpg	",
//     text:"Wall Art",
 
//   },
//   {
//     name:"discover-item-component",
//     path:"	https://i.etsystatic.com/27502657/r/il/34ea55/2915113681/il_300x300.2915113681_jqpd.jpg",
//     text:"On Sale",

//   },
//   {
//     name:"new-section-text",
//     textP:"Editors' Picks",
//     texth1:"For your home",
//     text3:"The Diwali Shop",
//     text4:"shop these unique finds",
//     text5:"Let light and luck into your home with handmade diyas, vibrant rangolis,"
//   },
//   // {
//   //   name:"new-section-text-component",
//   //   text: "Editors' Picks"
//   // },
//   // {
//   //   name:"new-section-h2",
//   //   text:"Diwali Finds"
//   // }
//   {
//     name:"new-section-component",
//     path:"https://i.etsystatic.com/12251572/r/il/ceec61/1630040351/il_680x540.1630040351_7h10.jpg",
//     price:"6,756",
//     tag:"₹",
//     discount:58
//   },
//   {
//     name:'new-section-component',
//     path:"https://i.etsystatic.com/17781666/c/2702/2148/150/…/e403c3/3334116247/il_680x540.3334116247_a85n.jpg",
//     tag:"₹",
//     price:"1,985",
//     discount:0
   
//   },
//   {
//     name:'new-section-component',
//     path:'https://i.etsystatic.com/16676438/c/2738/2174/0/25…/55aac5/1476320786/il_680x540.1476320786_8hkr.jpg',
//     points:"4 4 4 20 20 12 4 4",
//     price:"1,562",
//     discount:10,
//     tag:"₹",
//   },
//   {
//     name:"new-section-component",
//     path:'	https://i.etsystatic.com/21689103/c/1896/1507/664/…/4aad15/3549482360/il_680x540.3549482360_62rn.jpg',
//     price:"1,665",
//     discount:20,
//     tag:"₹",
//   },
//   {
//     name:"new-section-component",
//     path:"https://i.etsystatic.com/19698147/r/il/611f5f/3139648139/il_680x540.3139648139_srk0.jpg",
//     tag:"₹",
//     price:"2,714",
//     discount:0,
//   },
//   {name: "new-section-component",
//    path:"https://i.etsystatic.com/33029693/c/563/447/0/38/il/812218/3617933329/il_680x540.3617933329_agsq.jpg",
//    points:"4 4 4 20 20 12 4 4",
//    tag:"₹",
//    price:"2,146",
//    discount:0
//   },
//    {
//     xmlns:"http://www.w3.org/2000/svg",
//     viewBox:"0 0 24 2",
//     ariahidden:"true",
//     focusable:"false"
//    },

// ]
// const dataw = dataBase.find((em)=>{ em.component})
let data = find((item) => item.name == "svg");
const mainContainer = document.querySelector("#main-container");
// console.log(mainContainer)
mainContainer.innerHTML = `<div class ='header-container'>
                              <div class="header-child-one">
                              
                              <div class="span-container">
                                 <span>${dataBase[0].pathEtsy}<span>
                              </div>
                            
                              <div class="header-sign-in">
                              <div class="sign-in">
                              <button>${dataBase[1].content}</button>
                              </div>
                              <div class="span-luv">
                              <span>
                              ${dataBase[2].path}
                              </span> 
                              </div>
                              <div class="basket-svg-container">
                              ${dataBase[3].path}
                            </svg></span>
                              </div>
                              </div>        
                              
                              <div class="input-container">
                              <div class="toggle-bar-container">
                              <a>
                              ${dataBase[4].path}</a>
                            </div>
                              <div class ="second-child-container">
                                <input type="text" id="input-one" style="outline:none; background:transparent; border:none;" placeholder="Search for anything">
                                ${dataBase[5].path}
                              </div>
                              </div>
                            </div>
                            <div class="header-list">
                            </div>
                            <section>
                            <div class="container-class">
                            <div class="text-after-header">
                            <h3 class="h2-header">
                            ${dataBase[6].text}
                            </h3>
                            </div>
                            <div class="picture-container">
                            <div class="picture-parent-container">
              
                            </div>
                            </div>
                            </div>
                            </section>
                            <section class="component-section">
                            <div class="text-container"></div>
                            </section>`


                          //////header list media query
                            const listContainer = document.querySelector('.header-list')
                            const ul = document.createElement('ul')
                            ul.style.listStyle = 'none'
                            listContainer.appendChild(ul)
              dataBase.map((elementex)=>{
               if(elementex.name ==='header-list'){
                let count = 0
                
                
                const listArray = elementex.text.split(',')
           
                const lastArrayElement = listArray.pop()
               
                for(let i=0;i < listArray.length;i++){
                  count ++
                
                  const li = document.createElement('li')
                  ul.appendChild(li)
                  li.innerHTML=`${listArray[i]}`
                 if(count === listArray.length){
                  const li = document.createElement('li')
                  ul.appendChild(li)
                  li.innerHTML+=`${elementex.svg} ${lastArrayElement}`}
                }
               }
                 
              })  

//    const input =document.getElementById('input-one')
//    const container =document.querySelector('.second-child-container')
//    input.addEventListener('click',()=>{
//               container.classList.toggle('faded')

//    })

// function foo(){
//   const dataArray = dataBase.map((element,index)=>{
//     if (element.name === 'discover-item-component'){
//       const parentContainer = document.querySelector('.picture-parent-container')
//       const newEl = document.createElement('div')
//       newEl.classList.add('component-container')
//       parentContainer.appendChild(newEl)
//           const componentContainer = document.querySelector('.component-container')
//           console.log(componentContainer)
//           componentContainer.innerHTML += `<div class ="image-in-component"> <img src=${element.path}></div><div class="p-tag-component"><p>${element.text}</p>`
//     }
//     else{
//       console.log('not found')
//     }
//   })
// }
// foo()
let width = window.innerWidth
const secondSec = document.querySelector(".component-section")
const divComp = document.createElement('div')
divComp.classList.add('second-section-component-container')
secondSec.appendChild(divComp)



const parentContainer = document.querySelector('.picture-container')
const newEl = document.createElement('div')
parentContainer.appendChild(newEl)
newEl.classList.add('component-parent-container')
const parentContainerElmnt = document.querySelector('.component-parent-container')

function foo(){
  const dataArray = dataBase.map((element,index)=>{
    if (element.name === 'discover-item-component'){
          parentContainerElmnt.innerHTML += `<div class="component-container"><div class ="image-in-component"> <img src=${element.path}></div><div class="p-tag-component"><p>${element.text}</p></div>`
    }
    else{
      console.log('not found')
    }
    if (element.name === 'new-section-text'){
      const textSec = document.querySelector('.text-container')
      const h1Section = document.createElement('h1')
      const pTag = document.createElement('p')
       textSec.appendChild(pTag)
       textSec.appendChild(h1Section)
       pTag.textContent = element.textP
       h1Section.innerText = element.texth1
    }
    if(element.name==='new-section-component'){
      countIdx++
       const componentMainContainer = document.createElement('div')
      // componentMainContainer.appendChild(hoverIcon)
      componentMainContainer.classList.add('container-image')
      divComp.appendChild(componentMainContainer)
      const hoverDiv = document.createElement('div')
      componentMainContainer.appendChild(hoverDiv)
      hoverDiv.classList.add('hover-div')
      const spanH1 = document.createElement('span')
      hoverDiv.appendChild(spanH1)
      spanH1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>'
      const priceTag = document.createElement('p')
      const Pan = document.createElement('span')
     let realPrice =  element.price 
     realPrice = parseInt(realPrice.replace(',',"").trim(''))
     let discountRate = element.discount
     let discountPrice = realPrice * discountRate / 100
    
     let NewPirce =parseInt(realPrice - discountPrice)
    //  const tagie = NewPirce.split()
    //  console.log(tagie)
    let sty = NewPirce.toString().split('')
      
     console.log(sty)
     let styLength = sty.length - 3
           sty.splice(styLength,0,',')
      let newPrice =  sty.join('')
     console.log(sty)


  //    if(sty.length === 5){
  //     sty.splice(2,0,',')
  //     console.log(sty)
  //     newPrice = sty.join('')
  //   }
  // ///adding comma
  // if (sty.length === 4){
  //   sty.splice(1,0,',');
  //   console.log(sty)
  //    newPrice = sty.join('')
  //    console.log(newPrice)
  //   }
   
     if (discountRate==0){
             Pan.innerHTML = `<span id="ok-span" style="font-weight:900">${element.tag}</span><span style ="font-weight: 900">${element.price}</span>`}
             else{
              ////////creating elements and adding values to the discount r
     
              Pan.innerHTML = `<span style="font-weight:800">${element.tag}</span><span id="span-p" style="font-weight:800">${newPrice}</span><span id="elem-tag"><span>${element.tag}</span><span id="elem">${element.price}</span></span>`
              // const span1 =   document.createElement('span')
              //   Pan.appendChild(span1)
              //   Pan.innerHTML = `${element.tag}`
              //   const span2 = document.createElement('span')
              //   span2.setAttribute('id','span-p')
              //   Pan.appendChild(span2)
              //   span2.innerHTML = `${NewPirce}`
              //   const span3 = document.createElement('span')
              //   span3.setAttribute('id','elem-tag')
              //   Pan.appendChild(span3)
              //   const span31 = document.createElement('span')
              //   span31.setAttribute('id','elem2-tag')
              //   span3.appendChild(span31)
              //   span31.innerHTML = `${element.tag}`
              //   const span32 = document.createElement('span')
              //   span32.setAttribute('id','elem')
              //   span3.appendChild(span32)
              //   span32.innerHTML = `${element.price}`
             

             }
      // priceTag.style.position = "absolute"
      priceTag.appendChild(Pan).classList.add('span-to')
      Pan.classList.add('price-span')
      priceTag.classList.add('price')
      componentMainContainer.appendChild(priceTag)
      
   
      const image = document.createElement('img')
      componentMainContainer.appendChild(image)
      image.src=element.path

console.log(element.tag)


      if (countIdx === 3 || countIdx === 6){
        const divImg = document.createElement('div')
        const spanTag = document.createElement('span')
        divImg.appendChild(spanTag)
        // const svgEl = document.createElement('svg')
        // svgEl.setAttribute("xmlns","http://www.w3.org/2000/svg")
        // svgEl.setAttribute("viewBox","0 0 24 24")
        // svgEl.setAttribute("aria-hidden","true")
        // svgEl.setAttribute("focusable", "false")
        // spanTag.appendChild(svgEl)
        spanTag.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>`
        componentMainContainer.appendChild(divImg)
        componentMainContainer.style.position = 'relative'
        // const newEl = document.createElement('polygon')
        // svgEl.appendChild(newEl)
      //  newEl.setAttribute("points",element.points)

      }
    }
  })
}
foo()


// function boo(a,b){
//   if(true){
//  const section = document.createElement('section')
//  const divInSection = document.createElement('div')
//  section.appendChild(divInSection)
//  divInSection.classList.add('text-container-section')
//  console.log(section),
//  console.log(divInSection)
//   }
function foot(){
const Data = document.querySelector('.second-section-component-container')
const createTextDiv = document.createElement('div')
const createTextDiv2 = document.createElement('div')
createTextDiv.classList.add('text-cont')
createTextDiv2.classList.add('text-cont-el')
Data.appendChild(createTextDiv)
Data.appendChild(createTextDiv2)
 dataBase. map((elements)=>{
    if(elements.name === 'new-section-text'){
       createTextDiv.innerHTML =` <p>${elements.textP}</p><h1> ${elements.text3}</h1><a>${elements.text4}</a>`
       createTextDiv2.innerHTML =`<P>${elements.text5}</p>`
    }

  
  })
}
// for moo
const elementS = document.querySelectorAll('.container-image')


////
foot()
const divImg = document.createElement('div')
divImg.classList.add('child')
const spanTag = document.createElement('span')
const Elmnt = document.querySelector(".container-image")
divImg.appendChild(spanTag)
console.log(window.innerWidth)
Elmnt.appendChild(divImg)


Elmnt.style.position = 'relative'

window.addEventListener("resize",function moo(){
  let Elment = find(elmnt=> elmnt.id === 1)

  let windowWidth = window.innerWidth 
 
  // if ( windowWidth > 640){
 
  //  spanTag.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>`
  
  // }
  const child = document.querySelector('.child')
  if (Elmnt.contains(child)){
    console.log('tr')
console.log(windowWidth)
    if(windowWidth < 640){
      Elmnt.removeChild(divImg)
      spanTag.innerHTM=""
      console.log('img')
      console.log('true')
    }
 
  }else if(windowWidth > 640){
    console.log('false')
    Elmnt.appendChild(divImg)
    spanTag.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>`
  }
if (windowWidth > 640){

  // const sPan = document.createElement('span')
  // priceTag.style.position = "absolute"

}
})
let windowWidth = window.innerWidth 
if(windowWidth < 640){
  Elmnt.removeChild(divImg)
  console.log('img')
}
if(windowWidth > 640){
  spanTag.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>`
  Elmnt.appendChild(divImg)
  console.log('appended')
}

//////// for line through the old rate
const ElemNt = document.querySelectorAll('#elem-tag')
for(let i=0; i<ElemNt.length;i++){
ElemNt[i].style.textDecoration ='line-through'}
////////////

