import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/MainSectionOne/Main"
import MainTwo from "./components/MainSection2/MainSection2"
import MainThree from "./components/MainSection3/MainSection3"
import dataBase from "./components/dataBase.json"
let SecondCardObject
dataBase.map((a)=>{
    if(a.name==="CardsSecondSection"){
   SecondCardObject = a
  
    }
     return SecondCardObject
   
})
function App() {
  return (
    <div className="App">
     <header>
       <Header />
     </header>
     <main>
      <Main />
      <MainTwo arrayObj={SecondCardObject} />
      <MainThree />
     </main>
    </div>
  );
}

export default App;
