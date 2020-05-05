import React, { Component } from 'react';
import Request from '../../helpers/request'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event){
    let propertyName = event.target.name;
    let customer = this.state.customer
    customer[propertyName] = event.target.value
    this.setState({customer: customer})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.customer)
  }

  render(){
    return(
      <div className="new-customer-form">
      <br></br><br></br><br></br><br></br>
      <p> Welcome to Coffee Ahoy, create an account below and start shopping your favourite coffees!</p><br></br><br></br>
      <h1> Create an account </h1>
      <hr></hr>
      <form onSubmit={this.handleSubmit}>
      <label>Enter first name:</label>
      <input type="text" placeholder= "First Name" name="firstName" onChange={this.handleChange} value={this.state.customer.firstName} /><br/>
      <label>Enter last name:</label>
      <input type="text" placeholder= "Last Name" name="lastName" onChange={this.handleChange} value={this.state.customer.lastName} /><br/>
      <label>Enter user name:</label>
      <input type="text" placeholder= "User Name" name="userName" onChange={this.handleChange} value={this.state.customer.userName} /><br/>
      <label>Enter email:</label>
      <input type="text" placeholder= "Email" name="email" onChange={this.handleChange} value={this.state.customer.email} /><br/>
      <label>Enter a password:</label>
      <input type="text" placeholder= "Password" name="password" onChange={this.handleChange} value={this.state.customer.password} /><br/>
      <br></br><button type="submit">Create and Login</button>
      </form>
      </div>
    )
  }
}

export default LoginForm;
