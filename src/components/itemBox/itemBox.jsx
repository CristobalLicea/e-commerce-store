import React from "react";
import './itemBox.css'
import { api } from "../api/constants";

class ItemBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 1,
      error: ''
    }
  }

  async componentDidMount() {
    try {
      await api.get('/', this.props.cartId).then(res => {
        this.setState({
          cart: res.data
        })
      })
    } catch (err) {
        console.log("Could not get cart")
    }
  }

  clicked = () => {
    this.props.showProduct(this.props.id)
  }
  
  addToCart = async () => {
    if(this.state.quantity > this.props.stock){
      this.setState({
        error: 'Quantity Requested exceeds Inventory Stock'
      })
    } else if (this.state.quantity < 0) {
      this.setState({
        error: 'Please enter a quantity above 0'
      })
    } else {
        try {
          await api.post('/' + this.props.cartId, {
          'id': this.props.id,
          'quantity': this.state.quantity
        })
        this.setState({
          error: ''
        })
      } catch (err) {
          console.log("Unable to update quantity")
      }
      this.props.refreshCart()
    }
  }

  updateQuantity = (e) => {
    if(e.target.value < 0 || e.target.value > this.props.stock || !/^[0-9 ]*$/i.test(e.target.value)) {
      console.log("err")
    } else {
      this.setState({
        quantity: e.target.value
      })
    }
  }
 
  render() {

    return (
      <div className="itemBox" >
        <h5 onClick={this.clicked}>{this.props.name}</h5>
        <div className="imgSpace2" onClick={this.clicked}>
          <div className="image">
            <img src={this.props.image} alt="" />
          </div>
        </div>
        <div className="details">
          <input className="quantityInput" onChange={this.updateQuantity} type="text" name="qty" id="" value={this.state.quantity} placeholder="1"/>
          <p className="errorMsg">{this.state.error}</p>
          <h6>${this.props.price}</h6>
        </div>
        <div className="center">
          <button onClick={this.addToCart} className="add">Add To Cart</button>
        </div>
       
      </div>
    )
  }
}

export default ItemBox