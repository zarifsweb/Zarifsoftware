import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
     <Router>    
      <Navbar/>
         <hr/>
         <div className="page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
         </div>
         <hr/>
      <Footer/>
     </Router>   
    </div>
  );
}

export default App;
