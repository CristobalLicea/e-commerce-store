import React from "react";
import { api3 } from "../api/constants";
import AddressForm from "./address";
import './checkout.css'
import Confirmation from "./confirmation";
import Payment from "./payment";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
  }

  async componentDidMount() { 
    try {
      await api3.get('/' + this.props.cartId, {
        params: { 
          'type': 'cart'
        }
      }).then(res => {
        console.log(res.data.id)
        this.setState({
          checkoutCart: res.data,
          checkoutId: res.data.id,
          shippingMethods: res.data.shipping_methods[0].regions.US,
          subtotal: res.data.live.subtotal.formatted_with_symbol,
          display: "shipping"
        })
      })
    } catch (err) {
        console.log("could not get cart")
    }
  }

   getAddress = async (data) => {
    try {
      await api3.get('/' + this.state.checkoutId + '/helper/set_tax_zone?', {
        params: { 
          "country": "US",
          "region": data.state,
          "postal_zip_code": data.zipcode,
        }
      }).then(res => {
        this.setState({
          checkoutHelper: res.data,
          tax: res.data.live.tax.amount.formatted_with_symbol,
          total: res.data.live.total_due.formatted_with_symbol
        }) 
      })
    } catch (error) {
      
    }
    this.setState({
      shippingInfo: [data],
      display: "payment"
    })
  }

  confirmation = () => {
    this.setState({
      display: 'confirmation'
    })
  }

  render() {
    return(
      <div className="summary">
        {this.state.display === 'shipping' ? <AddressForm states={this.state.shippingMethods} subtotal={this.state.subtotal} setAddress={this.getAddress}/> :<></>}
        {this.state.display === 'payment' ? <Payment firstName={this.state.shippingInfo[0].firstName} subtotal={this.state.subtotal} total={this.state.total} lastName={this.state.shippingInfo[0].lastName} phone={this.state.shippingInfo[0].phone} tax={this.state.tax} confirmation={this.confirmation}/> : <></>}
        {this.state.display === 'confirmation' ? <Confirmation address={this.state.shippingInfo[0]} total={this.state.total} /> : <></>}
      </div>
    )
  }
}

export default Checkout