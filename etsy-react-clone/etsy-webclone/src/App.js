import './App.css';
import Header from "./components/Header/Header"
import FirstSectionCircularCards from "./components/MainSectionOne/Main"
import SecondSectionSquareCards from "./components/MainSection2/MainSection2"
import ThirdSectionCards from "./components/MainSection3/MainSection3"
import ButtonSection from "./components/MainSection3/Buttons"
import dataBase from "./components/dataBase.json"
import SectionFive from "./components/section5/SectionFive"
import SectionSix from "./components/SectionSIx/Section6"
import SectionSeven from "./components/SectionSeven/SectionSeven"
import SectionEight from "./components/SectionEight/SectionEight"
import HeaderNav from "./components/headerSectionTwo/headerNav"
import SquareCard from "./components/SquareCard/squareCardComponent"
import SquareC from "./components/SquareCard/SquareCard"
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
/*

data.map(item => {


switch(item.name) {
  
}

})

*/

function App() {
  return (
    <div className="App">
     <header>
       <Header />
     </header>
     <HeaderNav />
     <main>
      <FirstSectionCircularCards/>
      <SecondSectionSquareCards arrayObj={SecondCardObject} />
      <ButtonSection  />
      <div className="section-three-container">
      <ThirdSectionCards data={Object}/>
      <ThirdSectionCards style={{flexDirection: 'column-reverse',paddingTop:"4px"}} data={Object2} />
      </div>
      {/* <div className="fourth-section-container">
      <SecondSectionSquareCards style4={{maxWidth:'29%'}} arrayObj ={FourthCardObject} style={{marginBottom:"0"}} style2={{minHeight:"0px"}} style5={{marginBottom:"4px"}} style6={{marginBottom:"6px"}} />
      </div> */}
      <SectionFive arrayObj ={Object3}/>
      <SquareCard />
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
