import React from "react";
import './logIn.css'
import users from "../users/users";

class LogIn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if (users.map(user => user.email).includes(this.state.email) && users.map(user => user.password).includes(this.state.password)) {
      let i = users.map(user => user.email).indexOf(this.state.email);
      if(!users[i].cartId) {
        this.props.setCart(this.props.cartId)
      } else {
        this.props.setCart(users[i].cartId)
      }
      this.props.setUser(users[i])
      this.props.closeWindow()
    } else {
      console.log('no such user')
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({ ...prevState, [name]: value } ));
  }

  render() {

    return (
      <div id="logInSpace">
        <form action="">
          <h1>Welcome Back</h1>
          <p>Sign in to see offers and place orders</p>
          <div>
            <label htmlFor="">Email:</label>
            <input type="text" name="email" onChange={this.onChange} autoComplete='off'/>
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <input type="text" name="password" onChange={this.onChange} autoComplete='off'/>
          </div>
          <button type="button" className="submit" onClick={this.onSubmit}>Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn