import react from "react";
import './App.css';
import Navbar from "./components/navbar";
import index from "./components/index";
import About from "./components/about";
import services from "./components/services";
import contact from "./components/contact";
import Footer from "./components/footer"
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
            <Navbar />    
      </div>

      <Route exact path="/" component={index}/>
      <Route path="/about" component={About}/>
      
      <Route path="/services" component={services}/>
      <Route path="/contact" component={contact}/>

      <Footer />
    </Router>
  );
}

export default App;


