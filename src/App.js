import {BrowserRouter , Routes , Route} from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";
import About from "./about/about";
import './App.css';

function App() {
  return (
  <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
