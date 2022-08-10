import React from "react";
import { api } from "../api/constants";
import './cart.css'
import Line from "./line";


class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.getCart()
    this.state = {
    }
  }

  getCart = async () => {
    try {
      await api.get('/' + this.props.cartId).then(res => {
        this.setState({
          cart: res.data
        })
      })
    } catch (err) {
        console.log("could not get cart")
    }
  }

  updateCart = async (id, amount) => {

      try {
        await api.put(this.props.cartId + '/items/' + id, {
          'quantity': amount
        })
      } catch (err) {
          console.log("could not update cart")
      }
      this.getCart()
      this.props.refreshCart()
  } 

  itemDelete = async (id) => {
    await api.delete(this.props.cartId + '/items/' + id)
    this.getCart()
    this.props.refreshCart()
  }

  click = () => {
    this.props.checkout('checkout')
  }

  render() {

    return (
      <div id="cartPage">
        {this.state.cart ? (
          <div className="cart">
            <div className="produc">
              <p>Total Items: {this.state.cart.total_items}</p>
            </div>
            <div className="produc">
              <div className="part"><p>Name:</p></div>
              <div className="part"><p>Price:</p></div>
              <div className="part"><p>Quantity:</p></div>
              <div className="part"><p>Total:</p></div>
            </div>
            {this.state.cart.line_items.map((item) => (
              <Line key={item.name} name={item.name} price={item.price.formatted_with_symbol} itemTotal={item.line_total.formatted_with_symbol} id={item.id} quantity={item.quantity} updateCart={this.updateCart} itemDelete={this.itemDelete}/>
            ))}
            <div className="produc">
              <div className="part"><p></p></div>
              <div className="part"><p></p></div>
              <div className="part"><p>{this.state.cart.total_items}</p></div>
              <div className="part"><p>{this.state.cart.subtotal.formatted_with_symbol}</p></div>
            </div>
            <button id="checkout" onClick={this.click}>Continue to Checkout</button>
          </div>
        ):(
          <div></div>
        )}
      </div>
    )
  }
}

export default Cart