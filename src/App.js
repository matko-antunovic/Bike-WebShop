import React from 'react';
import './App.css';
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
