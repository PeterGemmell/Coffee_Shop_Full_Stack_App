import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Coffee extends Component {
  constructor(props){
    super(props);
    this.state = {
      qty: 0
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add(){
    this.setState({
      qty: this.state.qty + 1
    });
    // this.props.handleTotal(this.props.coffee.retailPrice);
  }

  subtract(){
    this.setState({
      qty: this.state.qty - 1
    });
    // this.props.handleTotal(-this.props.coffee.retailPrice);
  }

 // Rendering the list of Coffee along with the plus and minus quantity button.
  render(){
  return (
    <div className="coffee-component">
    <img src={this.props.coffee.imgLink} width="350" />
    <div>
    <p><b><u>{this.props.coffee.brandName}</u></b></p><br></br>
    <p><i>Name</i>  {this.props.coffee.productName}</p>
    <p><i>Origin</i>  {this.props.coffee.origin}</p>
    <p><i>Beans</i>  {this.props.coffee.typeOfBeans}</p>
    <p>{this.props.coffee.productInfo}</p>
    <p>Qty {this.state.qty}</p>
    <p>£{this.props.coffee.retailPrice}</p>
    <button className="btn btn-outline-primary" onClick={this.add}>
    +1
    </button>
    <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty <1}>
    -1
    </button>
    </div>
    </div>

  )
 }


}


export default Coffee;
