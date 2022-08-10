import React from "react";
import './checkout.css'

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="confirmationPage">
        <div className="confirmationCard">
          <h2>Payment of {this.props.total} received</h2>
          <p>{this.props.address.address}</p>
          <p>{this.props.address.firstName + ' ' + this.props.address.lastName}</p>
          <p>{this.props.total}</p>
          
        </div>
      </div>
    )
  }
}

export default Confirmation