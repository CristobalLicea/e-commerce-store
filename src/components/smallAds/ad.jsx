import React from "react";
import './ad.css'

class Ad extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="ad">
        <div className="descSpace">
          <h1>{this.props.h1}</h1>
          <p>{this.props.p}</p>
          <button className="buyBtn">Buy Now</button>
        </div>
        <div className="imgSpace"></div>
      </div>
    )
  }
}

export default Ad