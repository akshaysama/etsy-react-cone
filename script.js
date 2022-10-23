// const dataBase = [
//     {
//         name:"header",
//         svgPath:"<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'aria-hidden='true' role='presentation' focusable='false' style='display: block; height: 16px; width: 16px; fill: currentcolor;'><path d='M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z' opacity='.8'></path></svg>",
//         svgPathTwo:`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: rgb(34, 34, 34);"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>`,
//         search:"Where to?, Anywhere,Any Week, Add Guests"
//     }
//     ,{
//         name:"header-slider-images",
//         path:"`https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg`,`https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg`,`https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg`,`https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg`,`https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg`,`https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg`,`https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg`,`https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg`,`https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg`,`https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg`,`https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg`,`https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg`,`https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg`,`https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg`,`https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg`,`https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg`,`https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg`,`https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg`,`https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg`,`https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg`,`https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg`,`https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg`,`https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg`,`https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg`,`https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg`,`https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg`,`https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg`,`https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg`,`https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg`,`https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg`,`https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg`,`https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg`",
//         slideName:"Beaches,Amazing pools, Islands,Lake,Castles,OMG,National Parks, Tiny homes,Treehouses,Artic,Cabons,Design,Campervans,Amazing views,Lakefront,Surfing,A-Frames, Caves,Tropical,Bed&breakfasts,Houseboats,Farms,COuntryside,Earth homes,shared homes,Luxe,Golfing,Historical homes,Iconic cities,Cycladic homes,Mansions,Camping,Chef's kitchens",
//     }
// ]
import dataBase from "./dataBase.json" assert{type:'json'}
function headerCreate(ele,ment,name){
    let a = document.createElement(ele)
    let b = document.querySelector(ment)

    b.appendChild(a)
    a.classList.add(name)
    return(a,b)
}
function Inner(x,y){
    let z= document.querySelector(x)
   let q =  z.innerHTML = y
    return q
}
//////   header search bar  //////
let searchText
function searchSplit(){
    dataBase.map((a)=>{
        if(a.name === "header"){
      searchText =a.search.split(',') 
      console.log(searchText)}})
}
searchSplit()
const div1= headerCreate('div','header','header-container')
const div2 = headerCreate('div','.header-container','search-bar-container')
const div23 = headerCreate('div','.search-bar-container','search-icon-container') 
let svgPath
const svgDxv23 = dataBase.map((a)=>{if(a.name == "header"){
    svgPath = a.svgPath
    console.log(svgPath)
}})
console.log(svgPath)
const svgDiv23 =  Inner('.search-icon-container',`${svgPath}`)
const div21 = headerCreate('div','.search-bar-container','search-header')
const div22 = headerCreate('div','.search-header','top-text')
const div221 = headerCreate('span','.top-text','span-top-text')
const div2211 = Inner('.span-top-text',`${searchText[0]}`)
const div222 = headerCreate('div','.top-text','overflow-text')
for (let i=1;i<searchText.length;i++){
    let div2221 = headerCreate('span','.overflow-text','overflow-span')   
}
headerCreate('div','.overflow-text','dot-div')
headerCreate('div','.overflow-text','dot-div')
const dotheader = document.querySelectorAll('.dot-div')
dotheader.forEach((a)=>{a.innerHTML = '•'})
const spanThree = document.querySelectorAll('.overflow-text span')

for(let i = 0; i<spanThree.length; i++){
    spanThree[i].innerHTML = `${searchText[i+1]}`
}
const headerSearchEndButton = headerCreate('button','.search-bar-container','button-search')
const insideSearchButtton = headerCreate('div','.button-search','search-button-div')
const insideSearchButtonDiv = headerCreate('div','.search-button-div','svg-container-button')
let svgHeader
 dataBase.map((a)=>{if(a.name === "header"){svgHeader = a.svgPathTwo}})
 console.log(svgHeader)
 const insideSvgButton = Inner('.svg-container-button',`${svgHeader}`)
const headerDirectChild = headerCreate('div','header','header-slider-container')
const headerSlider0 = headerCreate('div','.header-slider-container','header-slider-container-child')
const headerChild = document.querySelector('.header-slider-container-child')
dataBase.map((a)=>{if(a.name ==="header-slider"){
let hrefSlider = a.path.split(',')
console.log(hrefSlider)
let textSlider = a.slideName.split(',')
console.log(textSlider)
const parentSelector = document.querySelector('.header-slider-container-child')
////////taking image links from the data base
let arraySliderText
let arrau
const arrat = dataBase.map((a)=>{if(a.name === "header-slider"){
    arrau = a.path
    arraySliderText = a.slideName
}})
arraySliderText = arraySliderText.split(',')
arrau = arrau.split(',')
console.log(arrau)
  for(let i=0; i<textSlider.length; i++){
  let buttons =  document.createElement('button')
  buttons.classList.add('button-slider')
  let span = document.createElement('span')
  span.innerHTML=`<img src ='${arrau[i]}'>`
  span.classList.add('span-slider')
  let span2 = document.createElement('span')
  span2.innerHTML = `${arraySliderText[i]}`
  span2.classList.add('span-sliderr')
  console.log(buttons)
  buttons.appendChild(span)
  buttons.appendChild(span2)
  parentSelector.appendChild(buttons)
//   const buttonSlider = document.querySelector('.button-slider')
//   console.log(buttonSlider)
//   Inner('.header-slider-container-child',`${buttonSlider}`)
    // sliderParent.forEach((a)=>{a.innerHTML +=`<div><span class = header-span></span><span class="header-span"></span></div>`})
  } 
 }})
 const buttonsClick = document.querySelectorAll('.button-slider')
 buttonsClick.forEach((a)=>{
    
    a.addEventListener('click',()=>{
        a.classList.add('border-bottom')
       

       setTimeout(() => {a.classList.remove('border-bottom')
       }, 100);
       
       
    })
 })
// // const buttonsSlider
 ///////// header slider /////////
// const div1 = headerCreate('div','header','header-tab-view')
// const div2 = headerCreate('div','.header-tab-view','first-part-header')
// const div3 = headerCreate('div','.search-bar-container','svg-container')
// const d = dataBase.map((a)=>{
//     let c = a.svgPath
//     return c
// })
// const div4 = Inner('.svg-container',d)
// const div5 = headerCreate('div','header','search-bar-header-top')
// const div6 = headerCreate('div','.search-bar-header-top','search-bar-top')
// const div7 = headerCreate('span','.search-bar-top','span-undf')
// const v = dataBase.map((a)=>{
//    const k =  a.search
//    return k 
// })
// Inner('.span-undf',v)

// const e = dataBase.map((a)=>{
//     let c = a.
// })

// const div = document.createElement('div')
// const a = document.querySelector('body')
// a.appendChild(div)
// div.classList.add('main-header-container')