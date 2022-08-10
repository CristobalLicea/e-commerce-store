import React from "react";
import './cart.css'
import { numbersOnly } from "../loginVal";


class Line extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numOnly: true,
      quantity: this.props.quantity
    }
  }

  updateCart = (e) => {
    if(numbersOnly(e.target.value)) {
      this.props.updateCart(e.target.id, e.target.value)
    } else {
      console.log('uhh')
    }
  } 

  itemDelete = (e) => {
    this.props.itemDelete(e.target.id)
  }

  render() {

    return (
      <div className="produc">
        <div className="part"><p>{this.props.name}</p></div>
        <div className="part"><p>{this.props.price}</p></div>
        <div className="part">
          <input type="text" name="quantity" id={this.props.id} className="amountInput" placeholder={this.props.quantity} onChange={this.updateCart}/>
        </div>
        <div className="part"><p>{this.props.itemTotal}</p></div>
        <button onClick={this.itemDelete} id={this.props.id} className={this.state.numOnly ? "delete" : 'off'}>X</button>
      </div>
    )
  }
}

export default Line