import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CoffeeContainer from './CoffeeContainer';
import LoginContainer from './LoginContainer';
import OrderContainer from './OrderContainer';
import AboutContainer from './AboutContainer';


const ShopContainer = () => {
  return(
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
    <Route path="/login" component={LoginContainer} />
    <Route path="/coffees" component={CoffeeContainer} />
    <Route path="/orders" component={OrderContainer} />
    <Route path="/about" component={AboutContainer} />
    </Switch>
    </Fragment>
    </Router>
   )
}

export default ShopContainer;
