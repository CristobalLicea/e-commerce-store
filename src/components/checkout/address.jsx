import React from "react";
import './checkout.css'
import { infoVal } from "./nameVal";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.setAddress(this.state)
  }

  onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
 
      if (!infoVal(name, value)) {
        e.target.value = ''
        this.setState((prevState) => ({ ...prevState, [name]: ''} ));
      } else {
        this.setState((prevState) => ({ ...prevState, [name]: value } ));
      }

  }

  render() {
    return(

      <div className="addressPage">
        <div className="addressForm">
        <h4>Shipping arrives somehting here</h4>
        <form action="" onSubmit={this.onSubmit}>

          <div className="inputSection3">
            <h3>Shipping address</h3>
            <p>Where Should we Deliver your order?</p>
          </div>

          <div className="inputSection">
            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='firstName' autoComplete='off' required/>
              <p className={!this.state.firstName ? "inputTextholder" : "float"}>First Name*</p>
            </div>

            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='lastName' autoComplete='off' required/>
              <p className={!this.state.lastName ? "inputTextholder" : "float"}>Last Name*</p>
            </div> 
        
          </div>
          <div className="inputSection">
            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='address' autoComplete='off' required/>
              <p className={!this.state.address ? "inputTextholder" : "float"}>Street Address*</p>
            </div>

            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='apt' autoComplete='off' />
              <p className={!this.state.apt ? "inputTextholder" : "float"}>Apt, Suite, etc.(Optional)</p>
            </div>  
            
          </div>
          <div className="inputSection">
            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='city' autoComplete='off' required/>
              <p className={!this.state.city ? "inputTextholder" : "float"}>City*</p>
            </div>

            <div className="inputTextspace2">
              <select onChange={this.onChange} name="state" id="">
                {this.props.states.map(state =>
                  <option value={state}>{state}</option>)}
              </select>
              <p className="float">State*</p>
            </div>  
            
            <div className="inputTextspace2">
              <input type="text" onChange={this.onChange} name='zipcode' maxLength={5} autoComplete='off' required/>
              <p className={!this.state.zipcode ? "inputTextholder" : "float"}>Zipcode*</p>
            </div>
          </div>
          <div className="inputSection2">

            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='phone' autoComplete='off'/>
              <p className={!this.state.phone ? "inputTextholder" : "float"}>Phone Number*</p>
            </div>  
            
          </div>

          <div className="inputSection2">
            <p className="footText">If you leave before placing your order, we'll store your information for 72 hours, in case you want to complete your order later.</p>
          </div>

          <button className="continue">Continue</button>
         
        </form>
        </div>
        <div className="summaryCard">
          <div className="row">
            <h6>Subtotal</h6>
            <h6>{this.props.subtotal}</h6>
          </div>
          <div className="row">
            <h6>Taxes</h6>
            <h6>Pending</h6>
          </div>
          <div className="row">
            <p>calculated once address is confirmed</p>
          </div>

        </div>
        
      </div>
    )
  }
}

export default AddressForm