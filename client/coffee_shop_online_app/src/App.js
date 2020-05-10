import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import ShopContainer from './containers/ShopContainer';
import CoffeeContainer from './containers/CoffeeContainer';
import ShoppingCart from './components/coffees/ShoppingCart';
import ShoppingCartOverlay from './components/coffees/ShoppingCartOverlay';
import Dropdown from 'react-overlays/Dropdown';


class App extends Component {


  render(){
    return(

      <div>
      <ShopContainer />
      </div>
    );
  }
}

export default App;
