import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CoffeeContainer from './CoffeeContainer';
import LoginContainer from './LoginContainer';


const ShopContainer = () => {
  return(
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
    <Route path="/coffees" component={CoffeeContainer} />
    <Route path="/login" component={LoginContainer} />
    </Switch>
    </Fragment>
    </Router>
   )
}

export default ShopContainer;
