import React from "react";
import { api, api2 } from "../api/constants";
import './product.css'
import InfoCard from "./infoCard";

class Product extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 1,
      error: ''
    }
  }
  
  async componentDidMount() {
    try {
      await api2.get('/' + this.props.item).then(res => { 
        this.setState({
          name: res.data.name,
          price: res.data.price.formatted_with_symbol,
          description: res.data.description,
          image: res.data.image.url,
          id: res.data.id,
          loaded: true,
          stock: res.data.inventory.available
        })
      })
    } catch (err) {
        console.log("Couldn't get Item...")
    }
  }

  addToCart = async () => {
    if(this.state.quantity > this.state.stock) {
      this.setState({
        error: 'Quantity Requested exceeds Inventory Stock'
      })
    } else if (this.state.quantity < 1) {
      this.setState({
        error: 'Please enter a quantity above 0'
      })
    } else {
        this.setState({
          error: ''
        })
      try {
        await api.post('/' + this.props.cartId, {
          'id': this.state.id,
          'quantity': this.state.quantity
        })
        this.props.refreshCart()
      } catch (err) {
          console.log("Couldn't add to cart...")
      }
    }
  }

  change = (name, value) => {
    this.setState((prevState) => ({ ...prevState, [name]: value } ));
  }
  
  render() {

    return (
      this.state.loaded ? (
        <div className="product">
        <div className="productImage">
          <img src={this.state.image} alt="" />
        </div>
        <InfoCard name={this.state.name} price={this.state.price} description={this.state.description} stock={this.state.stock} change={this.change} addToCart={this.addToCart} error={this.state.error}/>
      </div>
      ):(
        <div></div>
      )
    )
  }
}

export default Product