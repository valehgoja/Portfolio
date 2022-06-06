import About from './About';
import './App.css';
import Home from './Home';
import Services from './Services';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import menu_png from './images/menu_img.png'

function App() {
  
  return (
    <Router>
    <div >
       <div className="header">
        <div className="nameLogo">
        𝕍𝕒𝕝𝕖𝕙𝔾𝕠𝕛𝕒
        </div>
        <div className='hide_menu'><button><img className='menu_img' src={menu_png}/></button></div>
        <nav id="navbar" className="navbar">
          
        <ul>
          <li><a className="nav-link scrollto" href="/"><Link to="/">Home</Link></a></li>
          <li><a className="nav-link scrollto" href="/about"><Link to="/about">About</Link></a></li>
          <li><Link to="/services"><a className="nav-link scrollto" href="/services">Services</a></Link></li>
          <li><Link to="/contact"><a className="nav-link scrollto " href="/contact">Contact</a></Link></li>
            </ul>
            </nav >
     </div> 
    </div>
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route  path="/About" element={<About/>}></Route>
      <Route  path="/Services" element={<Services/>}></Route>
      <Route  path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
