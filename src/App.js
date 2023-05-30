
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";




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
   <Router>
     <Navbar title="TextUtils" tr = "about" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>

     <div className="container  my-3">
     <Switch>
          <Route path="/about">
            <About  mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm heading="Try TextUtils- Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
          
     </div>
     </Router>
      
    </>
  );
}
