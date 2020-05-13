import React, {Component} from 'react';
import Coffee from './Coffee.js';
import ShoppingCart from './ShoppingCart.js';
import NavBar from '../../NavBar.js';

class Header extends Component {

  render(){
    return(
      <header className="new-header">
      <ShoppingCart quantity={this.props.quantity.coffee}
      amountToPay={this.props.amountToPay.coffee} />
      </header>
    )
  }
}

export default Header;
