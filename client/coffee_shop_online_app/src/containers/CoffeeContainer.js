import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CoffeeList from '../components/coffees/CoffeeList'
import Request from '../helpers/request'
import CoffeeDetail from '../components/coffees/CoffeeDetail'


class CoffeeContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      coffees: []
    }

    this.findCoffeeById = this.findCoffeeById.bind(this);
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
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default CoffeeContainer;
