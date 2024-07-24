import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const [theme,setTheme]=useState("primary");

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Switched to Dark Mode","success");
      document.title="TextUtils- Dark Mode";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Switched to Light Mode","success");
      document.title="TextUtils- Light Mode";
    }
  }
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const changeTheme=(e)=>{
    if(e.target.className==="blue"){
      document.body.style.backgroundColor="#042743";
      setTheme("primary");
    }
    else if(e.target.className==="green"){
      document.body.style.backgroundColor="rgb(0,40,0)";
      setTheme('success');
    }
    else{
      document.body.style.backgroundColor="rgb(55,55,0)";
      setTheme("warning");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" toggleMode={toggleMode} mode={mode} changeTheme={changeTheme}/>
      <Alert alert={alert}/>
      <br/>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} theme={theme}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
