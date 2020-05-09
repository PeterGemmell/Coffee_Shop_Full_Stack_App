import React, {Component} from 'react';
import Coffee from './Coffee.js';
import ShoppingCart from './ShoppingCart.js';

class Header extends Component {

  render(){
    return(
      <header className="new-header">
      <ShoppingCart quantity={this.props.quantity}
      amountToPay={this.props.amountToPay} />
      </header>
    )
  }
}

export default Header;
