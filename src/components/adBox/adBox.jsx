import React from "react";
import { adList } from "../adListings/adListings";

import './adBox.css'

let i = 0

class AdBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: adList[i].title,
      desc: adList[i].desc,
      img: adList[i].img,
    }
  }

  componentDidMount() {
    setInterval(this.tick, 8000);
  }

  tick = () => {
    if (i === adList.length-1) {
      i = 0;
    } else {
      i++;
    }
    
    this.setState({
      title: adList[i].title,
      desc: adList[i].desc,
      img: adList[i].img
    })
  }


  onClick = () => {
    if (i === adList.length-1) {
      i = 0;
    } else {
      i++;
    }
    this.setState({
      title: adList[i].title,
      desc: adList[i].desc,
      img: adList[i].img
    })
  }



  render() {

    return (
      <div className="pageBigBox">
          <div className="ad">
            <div className="descSpace">
              <h1>{this.state.title}</h1>
              <p>{this.state.desc}</p>
              <div className="end">
              <button className="buyBtn">More Information</button>
              </div>
            </div>
            <div className="imgSpace">
              <img className='adImg' src={this.state.img} alt="" />
            </div>
          </div>
          <button onClick={this.onClick} className="next">{'>'}</button>
        </div>
    )
  }
}

export default AdBox