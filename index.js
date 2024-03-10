import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Webpage from './webpage';
import Login from './login';
import Signup from './signup';
import Home from './home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function Website(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Webpage/>}></Route>
      <Route path = "/login" element = {<Login/>}></Route>
      <Route path = "/signup" element = {<Signup/>}></Route>
      <Route path = "/home" element = {<Home/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Website/>,document.getElementById('root'));