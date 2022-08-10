import React from "react";
import Home from "../home/home";
import './page.css'
import Product from "../products/product";
import Cart from "../cart/cart";
import SearchResult from "../searchResult/searchResult";
import Category from "../categories/category";
import { api, api2 } from "../api/constants";
import NavBar from "../navBar/navBar";
import Checkout from "../checkout/checkout";

class Page extends React.Component {
  constructor (props) {
    super(props);
    this.getCart()
    this.state = {
      content: null,
      signIn: false,
      cart: {
        total_items: 0
      },
      user: {
        zipcode: 0
      }
    }
  }

  getCart = async () => {
    try {
      await api.get('/',).then(res => {
        this.setState({
          cart: res.data,
          cartId: res.data.id,
          content: 'home'
        })
      })
    } catch (err) {
        console.log("error")
    }
  }
  
  refreshCart = async() => {
    try {
      await api.get('/' + this.state.cartId).then(res => {
        console.log(res.data)
        this.setState({
          cart: res.data
        })
      })
    } catch (err) {
      console.log("error")
    }
  }

  showProduct = (data) => {
    this.setState({
      content: ''
    })

    this.setState({
      content: 'product',
      item: data
    })
  }
  
  updateCategory = (data) => {
    this.setState({
      content: ''
    })
    
    api2.get('/?category_slug=' + data).then(res => {
      this.setState({
        items: res.data.data,
        category: data,
        content: 'category'
      })
    })

  }

  setContent = (data) => {
    this.setState({
      content: '',
    })

    if (data === "searchResult") {
      this.setState({
        content: "searchResult"
      })
    }
    if (data === "home") {
      this.setState({
        content: "home"
      })
    }
    if (data === "cart") {
      this.setState({
        content: "cart"
      })
    }
    if (data === "checkout") {
      this.setState({
        content: "checkout"
      })
    }
  }

  setUser = (data) => {
    this.setState({
      user: data,
      loggedIn: true
    })
  } 

  changeState = (name, value) => {
    this.setState((prevState) => ({ ...prevState, [name]: value } ));
  }

  setCart = (data) => {
    this.setState({
      cartId: data
    })
    this.refreshCart()
  }

  render() {

    return (
      <div id="mainPage">
        <NavBar search={this.search} updateCategory={this.updateCategory} changeState={this.changeState} setContent={this.setContent} cartId={this.state.cartId} cart={this.state.cart} setUser={this.setUser} setCart={this.setCart} zipcode={this.state.user.zipcode}/>
        
        <div id="content">
          {this.state.content === 'home' ? (
            <Home showProduct={this.showProduct} setContent={this.setContent} updateCategory={this.updateCategory} cartId={this.state.cart.id} refreshCart={this.refreshCart}/>
          ) : <></>}
          {this.state.content === 'product' ? (
            <Product item={this.state.item} cartId={this.state.cart.id} refreshCart={this.refreshCart}/>
          ) : <></>}
          {this.state.content === 'category' ? (
            <Category category={this.state.category} items={this.state.items} showProduct={this.showProduct} cartId={this.state.cart.id} refreshCart={this.refreshCart}/>
          ) : <></>}
          {this.state.content === 'cart' ? (
            <Cart cartId={this.state.cart.id} refreshCart={this.refreshCart} checkout={this.setContent}/>
          ) : <></>}
          {this.state.content === 'searchResult' ? (
            <SearchResult entry={this.state.search} cartId={this.state.cart.id} refreshCart={this.refreshCart} showProduct={this.showProduct}/>
          ) : <></>}
          {this.state.content === 'checkout' ? (
            <Checkout cartId={this.state.cartId}/>
          ) : <></>}
        </div>

        <footer></footer>
      </div>
    )
  }
}

export default Page 