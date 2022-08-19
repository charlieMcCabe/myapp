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
// import logo from './logo.svg';
// import './App.css';
// import './Click.css';
// import Homepage from './Components/Homepage'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="sidebar">
            <ul className="header">
              <li><NavLink to="/"><img className="homeimage" src="https://www.transparentpng.com/thumb/bill-gates/background-bill-gates-transparent-8.png"/></NavLink></li>
              <li><NavLink to="/stuff">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><img scr="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wikipedia_interwiki_section_gear_icon_white.svg/1200px-Wikipedia_interwiki_section_gear_icon_white.svg.png"/></li>
            </ul>
            <ul className="menu">
              <li><img className="menuicon" scr="/public/images/icon.png"/></li>
              <li><img className="settingsicon" scr="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wikipedia_interwiki_section_gear_icon_white.svg/1200px-Wikipedia_interwiki_section_gear_icon_white.svg.png"/></li>

            </ul>
          </ul>
        </div>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/stuff" element={<Stuff />}/>
        <Route exact path="/contact" element={<Contact />}/>
        
        </Routes>
      </BrowserRouter>
      // <HashRouter>
      //   <h1>Simple SPA</h1>
      //    <ul className="header">
      //      <li><NavLink to="/">Home</NavLink></li>
      //      <li><NavLink to="/stuff">Stuff</NavLink></li>
      //      <li><NavLink to="/contact">Contact</NavLink></li>
      //    </ul>
      //   <Routes>
      //   <Route exact path="/" component={Home}/>
      //   <Route path="/stuff" component={Stuff}/>
      //   <Route path="/contact" component={Contact}/>
      // </Routes>
      // </HashRouter>
      // <HashRouter>  
      //   <div>
      //     <h1>Simple SPA</h1>
      //     {/* <ul className="header">
      //       <li><NavLink to="/">Home</NavLink></li>
      //       <li><NavLink to="/stuff">Stuff</NavLink></li>
      //       <li><NavLink to="/contact">Contact</NavLink></li>
      //     </ul> */}
      //     <div className="content">
      //       <Routes>
      //       <Route exact path="/" component={Home}/>
      //       <Route path="/stuff" component={Stuff}/>
      //       <Route path="/contact" component={Contact}/>
      //       </Routes>
      //     </div>
      //   </div>
      // </HashRouter>
   );
  }
}


// function Click() {
//       return(
//     <div class="image-swap">
//       <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/1/1375354802439/Blue---the-colour-008.jpg?width=620&quality=85&fit=max&s=b3ffd0a4209f93a8c1db0a9a573cde9f" />
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/512px-Solid_red.svg.png?20150316143248" />
//     </div>
//   )  
// }
 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {Homepage()}
//         {Click()}
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Click here
//           </a>
//           <div style={{}}></div>
          
//         </div>
//       </header>
//     </div>
//   );
// }


export default App;