
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';



export default function App() {

  const [mode, setMode] = useState('light')
  const[alert, setAlert] = useState('')

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }


  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark Mode is enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light Mode is enabled","success");

    }
  }


  return (
   <>
     <Navbar title="TextUtils" tr = "about" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>

     <div className="container  my-3">
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
     </div>
     {/* <About/> */}
    </>
  );
}
