import React, { Component, Fragment } from 'react';
import ShopContainer from './containers/ShopContainer';
import CoffeeContainer from './containers/CoffeeContainer';
import ShoppingCart from './components/coffees/ShoppingCart';
import ShoppingCartOverlay from './components/coffees/ShoppingCartOverlay';
import Dropdown from 'react-overlays/Dropdown';
import CoffeeList from './components/coffees/CoffeeList';
import Coffee from './components/coffees/Coffee';
import CoffeeDetail from './components/coffees/CoffeeDetail';


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
