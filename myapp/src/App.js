
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element ={<Login />}/>
          <Route path ="/signup" element ={<Signup/>}/>
          <Route path ="/home" element ={<Home />}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
