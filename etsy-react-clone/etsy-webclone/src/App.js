import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/MainSectionOne/Main"
import MainTwo from "./components/MainSection2/MainSection2"
import MainThree from "./components/MainSection3/MainSection3"
import ButtonSection from "./components/MainSection3/Buttons"
import dataBase from "./components/dataBase.json"
import SectionFive from "./components/section5/SectionFive"
import SectionSix from "./components/SectionSIx/Section6"
import SectionSeven from "./components/SectionSeven/SectionSeven"
import SectionEight from "./components/SectionEight/SectionEight"
import HeaderNav from "./components/headerSectionTwo/headerNav"
import HeaderHover from "./components/headerSectionTwo/headerHover"
// import SectionSixCpy from "./components/SectionSIx/SectionSixCpy"
// import SectionSixCpy2 from "./components/SectionSIx/sectionSixCpy2"
let Object 
let Object2
dataBase.map((obj)=>{
if(obj.name ==="cardThree"){
   Object = obj.Cards 
   Object2 = obj.CardsMirror
}
})
let SecondCardObject
let FourthCardObject
dataBase.map((a)=>{
    if(a.name==="CardsSecondSection"){
   SecondCardObject = a
  
    }
    if(a.name ==="CardsFourthSection"){

     FourthCardObject = a
    }     return null
})
let Object3
dataBase.map((obj)=>{
    if(obj.name==="cardsFifthSection"){
        Object3 = obj
    }
    return Object3
  
})

function App() {
  return (
    <div className="App">
     <header>
       <Header />
     </header>
     <HeaderNav />
     <main>
      <Main />
      <MainTwo arrayObj={SecondCardObject} />
      <ButtonSection  />
      <MainThree array ={Object}/>
      <MainThree style={{flexDirection: 'column-reverse',paddingTop:"4px"}} array={Object2}/>
      <div className="fourth-section-container">
      <MainTwo style4={{maxWidth:'29%'}} arrayObj ={FourthCardObject} style={{marginBottom:"0"}} style2={{minHeight:"0px"}} style5={{marginBottom:"4px"}} style6={{marginBottom:"6px"}}/>
      </div>
      <SectionFive arrayObj ={Object3}/>
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      {/* <SectionSixCpy arrayObj ={Object3}/>
      <SectionSixCpy2 arrayObj={Object3} /> */}
     </main>
    </div>
  );
}

export default App;
