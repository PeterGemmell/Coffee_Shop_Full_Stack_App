import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Request from '../helpers/request'
import LoginForm from '../components/login/LoginForm'

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customer: ""
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/customers')
    .then((data) => {
      this.setState({user: data})
    })
  }

  handlePost(user){
    const request = new Request();
    request.post('/api/customers', customer)
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
      <Route exact path = '/login' render={() => {
        return <LoginForm onCreate={this.handlePost} />
      }} />
      </Switch>
      </div>
      </Router>
    )
  }
}


export default LoginContainer;
