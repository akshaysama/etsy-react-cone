import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/MainSectionOne/Main"
import MainTwo from "./components/MainSection2/MainSection2"
import MainThree from "./components/MainSection3/MainSection3"

function App() {
  return (
    <div className="App">
     <header>
       <Header />
     </header>
     <main>
      <Main />
      <MainTwo />
      <MainThree />
     </main>
    </div>
  );
}

export default App;
