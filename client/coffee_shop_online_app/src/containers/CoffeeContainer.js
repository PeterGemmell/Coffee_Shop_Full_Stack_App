import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CoffeeList from '../components/coffees/CoffeeList'
import Request from '../helpers/request'
import CoffeeDetail from '../components/coffees/CoffeeDetail'
import Header from '../components/coffees/Header'
import ShoppingCartOverlay from '../components/coffees/ShoppingCartOverlay'
// import ShoppingCartProduct from '../components/coffees/ShoppingCartProduct'
// import ShoppingCartTotal from '../components/coffees/ShoppingCartTotal'
// import ShoppingCart from '../components/coffees/ShoppingCart'
// import ShopContainer from './ShopContainer';


class CoffeeContainer extends Component {


  constructor(props){
    super(props);
    this.state = {
      coffees: [],
      quantity: 0,
      amountToPay: 0,
      itemsInCart: []
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.findCoffeeById = this.findCoffeeById.bind(this);
  }

  addToCart(coffee){
    let itemsInCart = this.state.itemsInCart;
    itemsInCart.push(this.props.coffees[coffee.id]);
    [][coffee.id].inCart = true;
    [][coffee.id].quantityInCart = 1;
    this.setState({
      quantity: this.state.quantity + 1,
      amountToPay: this.state.amountToPay - this.props.coffees[coffee.id].retailPrice,
      itemsInCart: itemsInCart,
      coffees: []

    });
  }

  removeFromCart(coffee, indexInCart){
    let itemsInCart = this.state.itemsInCart;
    [][coffee.id].inCart = false;
    [][coffee.id].quantityInCart = 0;
    itemsInCart.splice(indexInCart, 1);
    this.setState({
      quantity: this.state.quantity -1,
      amountToPay: this.state.amountToPay - this.props.coffees[coffee.id].retailPrice,
      itemsInCart: itemsInCart,
      coffees: []
    });
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/coffees')
    .then((data) => {
    this.setState({coffees: data})
    })
  }

  handlePost(coffee){
    const request = new Request();
    request.post('/api/coffees', coffee)
    .then( () => {
      window.location = '/coffees'
    })
  }

  findCoffeeById(id){
    return this.state.coffees.find((coffee) => {
      return coffee.id === parseInt(id);
    });
  }

  render(){

    if(!this.state.coffees){
      return null
    }

    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) => {
        return <CoffeeList coffees={this.state.coffees} />
      }} />
      <Header quantity={this.state.quantity}
      amountToPay={this.state.amountToPay} />
      <ShoppingCartOverlay data={this.state}
      removeFromCart={this.removeFromCart} />
      <CoffeeList coffees={this.props.coffees}
      addToCart={this.addToCart} />
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default CoffeeContainer;
