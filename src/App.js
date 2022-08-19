import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { click } from "@testing-library/user-event/dist/click";
// import logo from './logo.svg';
// import './App.css';
// import './Click.css';
// import Homepage from './Components/Homepage'

// const button = document.querySelector(".button");
// const sidebar = document.querySelector(".sidebar");

// button.addEventListener("active", () => {
//   button.classList.toggle("active");
//   sidebar.classList.toggle("active");
// })

// document.querySelectorAll(".sidebar").forEach(NavLink => NavLink.
//   addEventListener("click", () => {
//     button.classList.remove("active");
//     sidebar.classList.remove("active");
// }))

class App extends Component {
  render() {
    const button = document.querySelector("#button");
    const sidebar = document.querySelector("#sidebar");

    if (button) {
      button.addEventListener("click", () => {
        console.log('CLICK')
        button.classList.toggle("active");
        sidebar.classList.toggle("active");
      })
    }

    if (sidebar) {
      document.querySelectorAll("#sidebar").forEach(NavLink => NavLink.
        addEventListener("click", () => {
          button.classList.remove("active");
          sidebar.classList.remove("active");
      }))  
    }


    return (
      <BrowserRouter>
          <div className="sidebar" id="sidebar">
            <button className="button" id="button" onClick={()=>{
              document.querySelector("#button").classList.toggle("active");
              document.querySelector("#sidebar").classList.toggle("active");
            }}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className="header">
              <li onClick={()=>{
              document.querySelector("#button").classList.toggle("active");
              document.querySelector("#sidebar").classList.toggle("active");
            }}><NavLink to="/"><img className="homeimage" src="https://www.transparentpng.com/thumb/bill-gates/background-bill-gates-transparent-8.png" /></NavLink></li>
              <li onClick={()=>{
              document.querySelector("#button").classList.toggle("active");
              document.querySelector("#sidebar").classList.toggle("active");
            }}><NavLink to="/stuff">About</NavLink></li>
              <li onClick={()=>{
              document.querySelector("#button").classList.toggle("active");
              document.querySelector("#sidebar").classList.toggle("active");
            }}><NavLink to="/contact">Contact</NavLink></li>
            </ul>  
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/stuff" element={<Stuff />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>

   );
  }
}

export default App;