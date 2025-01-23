<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Create from "./Create"
import Update from "./Update"
import Read from "./Read"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/read/:id" element={<Read/>}/>
      </Routes>
    </Router>
=======
import Home from "./Home"
import Products from "./Products"
import AboutUs from "./AboutUs"
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <div className="app-main">
      <Router> 
        <ol className="Navbar">
          <div className="title">
            <li><h1>Retro...</h1></li>
          </div>  
          <div className="others">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/aboutUs">AboutUs</Link></li>
          </div> 
        </ol>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/products" element={ <Products/> }/>
          <Route path="/aboutus" element={ <AboutUs/> }/>
        </Routes>
      </Router>
    </div>
>>>>>>> 7f80b156ada231151ce57cd238b651046cd26207
  )
}

export default App
