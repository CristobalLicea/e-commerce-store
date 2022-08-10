import React from "react";
import './checkout.css'

const months = []
const years = []

class Payment extends React.Component {
  constructor(props) {
    super(props);
    for(let i = 1; i<13; i++) {
      months.push(i)
    }
    for(let i = 22; i<30; i++) {
      years.push(i)
    }
    this.state = {
      cardInfo: {
        cardNumber: '',
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phone: this.props.phone
      }
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'cardNumber') {
      let mask = e.target.value.split(' ').join('');
      if(mask.length) {
        mask = mask.match(new RegExp('.{1,4}', 'g')).join(' ');
        console.log(mask)
        this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: mask } }));
      } else {
        this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: '' } }));
      }
    } else {
      this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: value } })); 
    }

  }

  onSubmit = (e) => {
    this.props.confirmation()
  }

  render() {
    
    return(
      <div className="addressPage">
        <div className="addressForm">
        <h4>Shipping arrives somehting here</h4>
        <form action="" onSubmit={this.onSubmit}>

          <div className="inputSection3">
            <h3>Add credit or debit card</h3>
            <p>Other payment methods</p>
          </div>

          <div className="inputSection">
            <div className="inputTextspace3">
              <input type="text" value={this.state.cardInfo.cardNumber} onChange={this.onChange} name='cardNumber' autoComplete='off' pattern="[0-9\s]+" maxLength='19' required/>
              <p className={!this.state.cardInfo ? "inputTextholder" : "float"}>Card Number*</p>
            </div>
          </div>

          <div className="inputSection">
            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='firstName' autoComplete='off' value={this.state.cardInfo.firstName} required/>
              <p className="float">First Name*</p>
            </div> 
            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='lastName' autoComplete='off' value={this.state.cardInfo.lastName} required/>
              <p className={!this.state.cardInfo ? "inputTextholder" : "float"}>Last Name*</p>
            </div>
          </div>

          <div className="inputSection2">
            <div className="inputTextspace2">
              <select name="month" id="">
                {months.map(month => 
                  <option value={month}>{month}</option>)}
              </select>
              <p className="float">MM*</p>
            </div> 
            <div className="inputTextspace2">
              <select name="year" id="">
                {years.map(year => 
                  <option value={year}>{year}</option>
                )}
              </select>
              <p className="float">YY*</p>
            </div>
            <div className="inputTextspace2">
              <input type="text" onChange={this.onChange} name='cvv' autoComplete='off' required/>
              <p className={!this.state.cardInfo ? "inputTextholder" : "float"}>CVV*</p>
            </div>
          </div>
          <div className="inputSection2">
            <div className="inputTextspace">
              <input type="text" onChange={this.onChange} name='phone' value={this.state.cardInfo.phone} autoComplete='off' required/>
              <p className="float">Phone*</p>
            </div> 
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
            <h6>{this.props.tax}</h6>
          </div>
          <div className="row">
            <h6>Total</h6>
            <h6>{this.props.total}</h6>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Payment