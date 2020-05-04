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
      <div className= "coffee-details">

       <div className= "coffee-details-img-container">
        <img className= "coffee-details-img" src={this.props.coffee.imgLink} alt="image"/>
        </div>

        <div className= "coffee-box-details">
         <div className="coffee-box-details-text">
          <h1> {this.props.coffee.brandName} </h1>
          <h1> {this.props.coffee.productName} </h1>
          <h1> {this.props.coffee.origin} </h1>
          <h2> {this.props.coffee.typeOfBeans} </h2>
          <h2> £{this.props.coffee.retailPrice} </h2>
      </div>

      <button>Add To Basket</button>
      </div>
      </div>
    )
  }
}

export default CoffeeDetail;
