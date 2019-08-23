import React from 'react';
import './App.css';
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer"
import Story from "./Pages/OurStory/Story";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"
import SignIn from "./Pages/SignIn/SignIn"
import Retailer from "./Pages/Retailer/Retailer"
import Bikes from "./Pages/Bikes/Bikes"
import Bike from "./Pages/Bike/Bike"
import RenderPage from "./Pages/RenderPage/RenderPage"
import {Route} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
    
      <NavBar/>

      <div className="margin-wrapper">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/story" component={Story}/>
      <Route exact path="/cart" component={ShoppingCart}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/retailer" component={Retailer}/>
      <Route exact path="/bikes" component={Bikes}/>
      <Route exact path="/bikes/:name" component={Bike}/>
   
      <Route exact path="/section/:page/:name" component={Bike}/>
  
      <Route exact path="/section/:page" component={RenderPage}/>
      <Footer/>
      </div>
      
    </div>
    
  );
}

export default App;
