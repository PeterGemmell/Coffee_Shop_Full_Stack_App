import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';


class Coffee extends Component {
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(e){
    this.props.addToCart(this.props.coffee);
  }

  render(){
    return (
      <div className="items">
      <img src={this.props.coffee.imgLink} width="350"></img>
      <div className="info">
      <p><b><u>{this.props.coffee.brandName}</u></b></p>
      <p><i>Name </i>{this.props.coffee.productName}</p>
      <p><i>Origin </i>{this.props.coffee.origin}</p>
      <p><i>Beans </i>{this.props.coffee.typeOfBeans}</p>
      <p>{this.props.coffee.productInfo}</p>
      <span>£ {this.props.coffee.retailPrice}</span>
      <button onClick={this.props.handleAddToCart}
      disabled={this.props.coffee.inCart}
      className={this.props.coffee.inCart ? "button-disabled" : ""}>
      {this.props.coffee.inCart ? "Item in a cart" : "Add to cart"}
      </button>
    </div>
  </div>
    )
  }
}


export default Coffee;
