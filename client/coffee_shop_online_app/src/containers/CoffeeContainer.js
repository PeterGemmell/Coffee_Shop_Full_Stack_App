import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CoffeeList from '../components/coffees/CoffeeList'
import Request from '../helpers/request'
import CoffeeDetail from '../components/coffees/CoffeeDetail'
import Header from '../components/coffees/Header'
import ShoppingCartOverlay from '../components/coffees/ShoppingCartOverlay'
import ShoppingCartProduct from '../components/coffees/ShoppingCartProduct'
import ShoppingCart from '../components/coffees/ShoppingCart'
import Coffee from '../components/coffees/Coffee'


class CoffeeContainer extends Component {
  constructor(props) {
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
  addToCart(coffee) {
    let tempCart = this.state.itemsInCart;
    tempCart.push(this.state.coffees[coffee.id -1]);
    this.state.coffees[coffee.id].inCart = true;
    this.state.coffees[coffee.id].quantityInCart = 1;
    this.setState({
      quantity: this.state.quantity + 1,
      amountToPay: this.state.amountToPay - this.state.coffees[coffee.id].retailPrice,
      itemsInCart: tempCart
    });

  }


  removeFromCart(coffee, indexInCart) {
    let tempCartRemove = this.state.itemsInCart;
    this.state.coffees[coffee.id].inCart = false;
    this.state.coffees[coffee.id].quantityInCart = 0;
    tempCartRemove.splice(indexInCart, 1);
    this.setState({
      quantity: this.state.quantity - 1,
      amountToPay: this.state.amountToPay - this.state.coffees[coffee.id].retailPrice,
      itemsInCart: tempCartRemove
    });
  }
  componentDidMount() {
    const request = new Request();
    request.get('/api/coffees')
      .then((data) => {
        this.setState({ coffees: data })
      })
  }
  handlePost(coffee) {
    const request = new Request();
    request.post('/api/coffees', coffee)
      .then(() => {
        window.location = '/coffees'
      })
  }
  findCoffeeById(id) {
    return this.state.coffees.find((coffee) => {
      return coffee.id === parseInt(id);
    });
  }
  render() {
    if (!this.state.coffees) {
      return null
    }


    return (
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) => {
              return (
                <>
                <div>
                <Header quantity={this.state.quantity}
                    amountToPay={this.state.amountToPay} />
                  <ShoppingCartOverlay data={this.state}
                    removeFromCart={this.removeFromCart} />
                    <CoffeeList coffees={this.state.coffees}
                      itemsInCart={this.state.itemsInCart}
                      addToCart={this.addToCart} />
                </div>
                </>
              )
            }} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}
export default CoffeeContainer;
