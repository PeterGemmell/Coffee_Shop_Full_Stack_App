import React, {Component} from 'react';
import Coffee from './Coffee.js';
import ShoppingCart from './ShoppingCart.js';
import NavBar from '../../NavBar.js';

class Header extends Component {

  render(){
    return(
      <header className="new-header">
      <NavBar />
      <ShoppingCart quantity={this.props.quantity}
      amountToPay={this.props.amountToPay} />
      </header>
    )
  }
}

export default Header;
