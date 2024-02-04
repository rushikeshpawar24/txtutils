
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import { useState } from 'react';
import {
  
  
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
export default App;
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
  }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode}  toggleMode={toggleMode} title='textUtils' home='Home'/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/" element={  <Textform/>} />
          <Route exact path="/about" element={<About/>} />
          
        </Routes>
  
    </div>
    </BrowserRouter>
    </>
  );
}


