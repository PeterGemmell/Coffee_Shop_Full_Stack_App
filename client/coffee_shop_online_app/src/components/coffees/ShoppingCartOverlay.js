import React, {Component} from 'react';
import Coffee from './Coffee.js';
import ShoppingCartProduct from './ShoppingCartProduct.js';


class ShoppingCartOverlay extends Component {
  constructor(props){
    super(props);
    this.updateAmountToPay = this.updateAmountToPay.bind(this);
  }
  closeOverlay(){
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  }
  updateAmountToPay(coffee){
    this.forceUpdate();
  }
  render(){
    let itemsInCart = this.props.data.itemsInCart.map((coffee, index) =>{
      return <ShoppingCartProduct key={index}
              coffee={coffee}
              indexInCart={index}
              removeFromCart={this.props.removeFromCart}
              updateAmountToPay={this.updateAmountToPay} />
    });
    let amountToPay = 0;
    for (let i=0; i<this.props.data.coffees.length; i++) {
      amountToPay += this.props.data.coffees[i].retailPrice * this.props.data.coffees[i].quantityInCart;
    }
    return(
      <div id="overlay">
      <section id="shopping-cart">
      <div id="cart-header">
      <span id="cart-title">Shopping Cart</span>
      <i className="far fa-times-circle"
      onClick={this.closeOverlay.bind(this)}></i>
      </div>
      <table>
      <thead>
      <tr>
      <th>Product</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
      <th></th>
      </tr>
      </thead>
      <tbody>
      {itemsInCart}
      </tbody>
      </table>
      <span id="empty-cart">{(itemsInCart.length == 0) ? "Shopping cart is empty" : ""}</span>
      <h3 id="cart-total">Cart Total</h3>
      <div id="totals">
      <span>Cart Totals</span>
      <span>Number of items: {this.props.data.quantity}</span>
      <span>Total: £{amountToPay}</span>
      </div>
      <button id="checkout"
      disabled={itemsInCart.length == 0 ? true: false} >Checkout</button>
      </section>
      </div>

    )
  }

}

export default ShoppingCartOverlay;
