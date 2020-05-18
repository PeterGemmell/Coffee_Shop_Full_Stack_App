import React, {Component} from 'react';
import Coffee from './Coffee.js';

class ShoppingCartProduct extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleRemoveFromCart(e){
    this.props.removeFromCart(this.props.coffee, this.props.indexInCart);
  }

  handleQuantityChange(e){
    this.props.coffee.quantityInCart = e.target.value;
    // Update total value
    this.forceUpdate();
    this.props.updateAmountToPay(this.props.coffee);
  }

  render(){
    return(
      <tr className="items-in-cart">
      <td><img src={this.props.coffee.imgLink}></img></td>
      <td>{this.props.coffee.brandName}</td>
      <td>£{this.props.coffee.retailPrice}</td>
      <td>
      <input type="number" name="quantity" min="1" max="10" onChange={this.handleQuantityChange} />
      </td>
      <td>£{this.props.coffee.retailPrice * this.props.coffee.quantityInCart}</td>
      <td><p> <img src="./bin.png" className="bin-image" onClick={this.handleRemoveFromCart}/></p></td>
      </tr>
    )
  }
}


export default ShoppingCartProduct;
