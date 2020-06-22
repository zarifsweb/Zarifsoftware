import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
         <hr/>
         <div className="page">
            <Home className="home"/>
            <hr/>
         </div>
         <hr/>
      <Footer/>
    </div>
  );
}

export default App;
