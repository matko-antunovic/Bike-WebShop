import React,{Component} from 'react';
import './App.css';
import Landing from "./Pages/Landing/Landing";
import NavBarUpper from "./Components/NavBar/NavBarUpper";
import Drawer from "./Components/NavBar/Drawer/Drawer";
import Footer from "./Components/Footer/Footer"
import Story from "./Pages/OurStory/Story";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"
import SignIn from "./Pages/SignIn/SignIn"
import Retailer from "./Pages/Retailer/Retailer"
import Bikes from "./Pages/Bikes/Bikes"
import Bike from "./Pages/Bike/Bike"
import RenderPage from "./Pages/RenderPage/RenderPage"
import BackDrop from "./Components/NavBar/Drawer/BackDrop"
import {Route} from "react-router-dom";

class App extends Component{
  state={
    drawer:false
}

handleClick=()=>{
this.setState({
    drawer:!this.state.drawer
    })
}

  render(){
    return (
    
      <div className="App">
        <NavBarUpper drawer={this.state.drawer} handleClick={this.handleClick}/>
        <div className="margin-wrapper">
        <Drawer handleClick={this.handleClick} drawer={this.state.drawer}/>
        <BackDrop handleClick={this.handleClick} bck={this.state.drawer}/>
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
  
}

export default App;
