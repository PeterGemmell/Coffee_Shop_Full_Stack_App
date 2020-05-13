import React, {Component} from 'react';
import Coffee from './Coffee.js';
import Dropdown from 'react-overlays/Dropdown';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.showOverlay = this.showOverlay.bind(this);
  }

  showOverlay(){
    document.getElementById('overlay').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  }

  render(){
    return (

      <div id= 'cart'>
      {/* Hide a number of items if its equal 0 */}
      <span className={this.props.quantity == 0 ? "hide-price" : ""}>{this.props.quantity}</span>
      <img src="./shopcart.png" className="shopping-cart-image"
      onClick={this.showOverlay}/>
      </div>
    )
  }
}


export default ShoppingCart;
