import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import FavouriteCity from './components/favouriteCity/FavouriteCity';
import Personality from './components/favouritePersonility/Personality';
import Fts from './components/fts/Fts';
import Home from './components/home/Home.jsx'
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tour" element={<Fts />}></Route>
        <Route path="/city" element={<FavouriteCity />}></Route>
        <Route path="/personality" element={<Personality />}></Route>
      </Routes>

    </>
  )
}

export default App
