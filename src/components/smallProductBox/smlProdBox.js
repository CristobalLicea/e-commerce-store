import React from "react";
import './smlProductBox.css'

class SmallProductBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div id="smlProdBox">
        <div className="smlProdImg">
          <img src={this.props.image} alt=""/>
          <div className="smlProdInfo">
            <p>Name</p>
            <p>Price</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallProductBox