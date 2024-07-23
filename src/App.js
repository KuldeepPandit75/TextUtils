import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Switched to Dark Mode","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Switched to Light Mode","success");
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

  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <br/>
    <div className="container">
      <TextForm mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
