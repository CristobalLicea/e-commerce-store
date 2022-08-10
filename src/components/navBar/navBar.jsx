import React from "react";
import LogIn from "../logIn/logIn";
import Register from "../logIn/register";
import { BsCartCheck, BsSearch} from 'react-icons/bs';
import './navBar.css'

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      screenCover: false,
      signIn: false
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.props.changeState(name, value)
  }

  onClick = (e) => {
    console.log('clicked')
    this.props.setContent(e.target.name)
  }
  
  toggle = (e) => {
    const name = e.target.name
    if (name === 'logIn' || name === 'register') {
      this.setState({
        screenCover: true,
        display: name,
        signIn: false,
      })
    } else {
      this.setState({
        [name]: !this.state[name]
      })
    }
  }

  toggleOff = () => {
    this.setState({
      screenCover: false
    })
  }
  
  updateCategory = (e) => {
    this.props.updateCategory(e.target.id)
  }
  
  render() {
    return (
      <div>
        <nav>
          
          <div id="navTop">
            
            <div className='navItem' >
              <button className="home" name='home' onClick={this.onClick}>MyStore</button>
            </div>

            <div className='navItem'>
              <button className="navBtn" name="departments" onClick={this.toggle}>Departments</button>
              <div className={this.state.departments ? "navAside" : 'off'}>
                <button className="option" name="beautyHealth" onClick={this.updateCategory} id='beauty-health' onBlur={this.toggleOff}>Beauty & Health</button>
                <button className="option" name="Apparel" onClick={this.updateCategory} id='apparel' onBlur={this.toggleOff}>Apparel</button>
                <button className="option" name="JewleryAccessories" onClick={this.updateCategory} id='outdoor-and-gardening' onBlur={this.toggleOff}>Outdoor & Gardening</button>
                <button className="option" name="JewleryAccessories" onClick={this.updateCategory} id='jewelry-and-accessories' onBlur={this.toggleOff}>Jewlery & Accessories</button>
              </div>
            </div>

            <div className='navItem'>
              <button className="navBtn" name="services" onClick={this.toggle}>Services</button>
              <div className={this.state.services ? "navAside" : 'off'}>
              </div>
            </div>

            <div className='navItem' id="searchSpace">
              <input onChange={this.onChange} type="search" name="search" id="searchBar" />
              <button onClick={this.onClick} name='searchResult' id="searchConfirm"><BsSearch /></button>
            </div>

            <div className='navItem'>
              <button className="navBtn" name='reOrder'>Re-Order Items</button>
              <div className={this.state.reOrder ? "navAside" : 'off'}></div>
            </div>

            <div className='navItem'>
              <button className="navBtn" name='signIn'onClick={this.toggle}>Sign In</button>
              <div id={this.state.signIn ? 'signInBtns' : 'off'}>
                <div id="signInOptions">
                  <button name="logIn" onClick={this.toggle}>Log In</button>
                  <button name="register" onClick={this.toggle}>Register</button>
                </div>
              </div>
            </div>

            <div className='navItem'><button onClick={this.onClick} className="navBtn2" name="cart"><BsCartCheck />
              <span id="cartItems">{this.props.cart.total_items}</span>
            </button></div>
          </div>
        </nav>

        <div id={this.state.screenCover ? 'logInReg' : 'off'}>
          <button name="screenCover" onClick={this.toggle}>X</button>
          {this.state.display === "logIn" ? <LogIn setUser={this.props.setUser} cartId={this.props.cartId} setCart={this.props.setCart} closeWindow={this.toggleOff}/> : <></>}
          {this.state.display === 'register' ? <Register cartId={this.props.cartId} closeWindow={this.toggleOff}/> : <></>}
        </div>

        <div id="navBot">
          <div id="navBottom">

            <div className="navItem">
              <button id="optionButton">How do you want your items? | {this.props.zipcode}</button>
            </div>

            <div id="sections">
              <div onClick={this.updateCategory} id='beauty-health'>Beauty & Health</div>
              <div onClick={this.updateCategory} id='apparel'>Apparel</div>
              <div onClick={this.updateCategory} id='jewelry-and-accessories'>Jewlery and Accesories</div>
              <div onClick={this.updateCategory} id='outdoor-and-gardening'>Outdoor & Gardening</div>
              <div onClick={this.updateCategory} id='electronics'>Electronics</div>
              <div>Flash Picks</div>
              <div>COVID 19 Test Kits</div>
              <div>Store+</div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default NavBar