import React, {Component} from 'react';
import Coffee from './Coffee'

class CoffeeDetail extends Component {

  constructor(props){
    super(props)
  }

  render(){
    if(!this.props.coffee){
      return "Loading..."
    }
    return (
      <div className= "items">

        <img src={this.props.coffee.imgLink} alt="image"/>

          <h1> {this.props.coffee.brandName} </h1>
          <h1> {this.props.coffee.productName} </h1>
          <h1> {this.props.coffee.origin} </h1>
          <h2> {this.props.coffee.typeOfBeans} </h2>
          <h2> {this.props.coffee.productInfo} </h2>
          <h2> {this.state.qty} </h2>
          <h2> £{this.props.coffee.retailPrice} </h2>
      </div>
    )
  }
}

export default CoffeeDetail;
