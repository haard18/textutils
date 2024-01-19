import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alerts from "./components/Alerts";
// import {BrowserRouter, Routes ,Route } from 'react-router-dom';


// import Pallete from "./components/Pallete";
// import Accordion from "./components/Accordion";
function App() {
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },2000

    )
  }
  const[Mode,setMode]=useState("light");
  const Togglemode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='black';
      showAlert("dark mode is enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Main project" aboutText="Information" Mode={Mode} togglemode={Togglemode}/>
      <div className="paleete">

      </div>
      <Alerts alert={alert}/>
      <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter text to analyze" aboutText="About" Mode={Mode}/>
     </div>
             
            
    </>
  );
}

export default App;
