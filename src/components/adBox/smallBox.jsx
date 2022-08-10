import React from "react";
import { BsTruck, BsFillBasket2Fill, BsGem } from "react-icons/bs";

import './adBox.css'

class SmallBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="pageSmallBox">
        <div className="top">
          <h6>{this.props.topDesc}</h6>
          <button>See Times</button>
        </div>
        <div className="bottom">
          <div className="line">
            <h6>{this.props.botDesc}</h6>
            <button>View All</button>
          </div>
          <div className="iconSpace">
            <button className="icon"><BsTruck /></button>
            <button className="icon"><BsFillBasket2Fill /></button>
            <button className="icon"><BsGem/></button>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallBox