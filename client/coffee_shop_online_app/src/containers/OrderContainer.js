import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Request from '../helpers/request'
import OrderForm from '../components/orders/OrderForm'

class OrderContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      order: ""
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/orders')
    .then((data) => {
      this.setState({user: data})
    })
  }

  handlePost(order){
    const request = new Request();
    request.post('/api/orders', order)
    .then( () => {
      window.location = '/coffees'
    })
  }

  render(){
    if(!this.state.user){
      return null
    }

    return(
      <Router>
      <div>
      <Switch>
      <Route exact path= '/orders' render={() => {
        return <OrderForm onCreate={this.handlePost} />
      }} />
      </Switch>
      </div>
      </Router>
    )
  }

}

export default OrderContainer;
