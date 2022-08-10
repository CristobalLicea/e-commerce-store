import React from "react";
import './product.css'
import { BsHeart } from 'react-icons/bs';

class InfoCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if(value >= 0 && value < this.props.stock && /^[0-9]*$/i.test(value)) {
      this.setState({quantity: value})
      this.props.change(name, value)
    }
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.addToCart()
  }

  render() {

    return(
      <div className="productInfo">
        <div className="info">
          <div className="divide">
            <h5>{this.props.name}</h5>
            <button className="circle"><BsHeart/></button>
          </div>
          <div className="divide">
            <div></div>
            <h4 id="price">{this.props.price}</h4>
          </div>
          <div className="divide">
            <div className="qtyDiv">
              <input className="qtyInput" onChange={this.onChange} type="text" name="quantity" pattern="([0-9]{1,})" value={this.state.quantity} required/>
              <p className="smalltext">{this.props.stock} In Stock</p>
            </div>
            <button id="addToCart" onClick={this.onClick}>Add To Cart</button>
          </div>
          <div className="divide">
            <div></div>
            <p className="desc" dangerouslySetInnerHTML={{__html:this.props.description}}></p>
          </div>
          <p className="errorMsg">{this.props.error}</p>
          
        </div>
      </div>
    )
  }
}

export default InfoCard