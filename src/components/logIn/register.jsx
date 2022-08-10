import React from "react";
import './logIn.css'
import users from "../users/users";
import eye from '../assets/eye.png'

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        zipcode: '',
        passwordConfirm: '',
        cartId: this.props.cartId
      },
      passwordVis: false,
      pConfirmVis: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.user.password === this.state.user.passwordConfirm && !users.map(user => user.email).includes(this.state.user.email)) {
      users.push(this.state.user)
      console.log(users)
      console.log(this.state.user)
      alert('Account Created!')
      this.props.closeWindow()
    } else {
      console.log('hmm')
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({ user: {...prevState.user, [name]: value }} ));
  }

  togglePassVisibility = (e) => {
    if (e.target.name === 'password') {
      this.setState({
        passwordVis: !this.state.passwordVis
      })
    }

    if (e.target.name === 'pConfirm') {
      this.setState({
        pConfirmVis: !this.state.pConfirmVis
      })
    }
  }

  render() {

    return (
      <div id="logInSpace">
        <form action="" onSubmit={this.onSubmit}>
          <div className="loginInput">
            <label htmlFor="">Email:</label>
            <input type="email" name="email" onChange={this.onChange} autoComplete='off' required/>
          </div>
          <div className="loginInput">
            <label htmlFor="">Password:</label>
            <input type={this.state.passwordVis ? "text" : "password"} name="password" onChange={this.onChange} autoComplete='off' required/>
            <img src={eye} alt="" onClick={this.togglePassVisibility} type="button" name="password" className="eyeIcon"/>
          </div>
          <div className="loginInput">
            <label htmlFor="">Password Confirm:</label>
            <input type={this.state.pConfirmVis ? "text" : "password"} name="passwordConfirm" onChange={this.onChange} autoComplete='off' required/>
            <img src={eye} alt="" onClick={this.togglePassVisibility} type="button" name="pConfirm" className="eyeIcon"/>
          </div>
          <div className="loginInput">
            <label htmlFor="">Zipcode:</label>
            <input type="text" name="zipcode" onChange={this.onChange} autoComplete='off'/>
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Register