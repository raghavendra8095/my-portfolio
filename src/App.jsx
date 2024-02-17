import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Project from "./Routes/Project";
import About from "./Routes/About";
import "./index.css";
// import Contact from "./Routes/Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path='/contact' element={<Contact/>}/> */}
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
