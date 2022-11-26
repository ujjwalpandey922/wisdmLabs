import './App.css';
import Header from "./components/Header/Header";
import Baner from "./components/Baner/Baner";
import Home from "./components/Home/Home";
import BanerEnd from "./components/BanerEnd/BanerEnd";
import FullPage from "./components/FullPage/FullPage";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <div className="App">
      <Header/>
      <div className="firstpage">
      <Baner/>
      <Home/>
      <BanerEnd/>
      </div>
      <FullPage/>
      <Footer/>
    </div>
  )
}

export default App
