import { Routes, Route, Link } from "react-router-dom";

import React  from 'react';
import './App.css';
import Create from "./journey/student/create";
//import Manage from "./journey/student/manage";
import Student from "./journey/student/index";
import Mentor from "./journey/mentor/indexm";
import Createm from "./journey/mentor/createm";
function App() {

  return (
    <div className="App">
      <div id="zen-landing-page-container" className="app-container">
      <div
        id="zen-content-area-container"
        className="zen-content-area-container"
      >
        <div id="zen-sidebar" className="zen-sidebar">
          <div className="sidebar-header-branding">
          <img
              className="brand-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s"
              alt="Zen-class-logo"
            />
            Zen Classes
          </div>
          <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
            <ul>
              <li>
                <Link to ="/students">Students</Link>
                
                
              </li>
              
                <li>
                  <Link to="/mentors"> mentor journey</Link>
                </li>
            
              <li>
                <Link to ="/sess" > sessionjourney</Link></li>
             
            </ul>
          </nav>
        </div>
        <div id="zen-content-area" className="zen-content-area">
          <Routes>
          <Route path="students" Component={Student} >
              <Route path="creates" Component={Create} />
              
              </Route>
              <Route path="mentors" Component={Mentor}>
                <Route path="createm" Component={Createm} />
              </Route>
              
             
          </Routes>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
         
    
   