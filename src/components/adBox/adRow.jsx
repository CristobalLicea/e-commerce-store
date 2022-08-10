import React from "react";
import SmallProductBox from "../smallProductBox/smlProdBox";
import { api2 } from "../api/constants";

import './adBox.css'

class RowBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    try {
      await api2.get('/?limit=4&category_slug=' + this.props.category).then(res => {
        this.setState({
          items: res.data.data,
          loaded: true
        })
      })
    } catch (error) {
      console.log(error)
    }
    
  }

  render() {

    return (
      <div className="rowBox">
        <div className="title">Deals just for you!</div>
        <div className="rowContent">
          {this.loaded ? (
          <div>
            {this.state.items.map(item => {
              <SmallProductBox name={item.name} price={item.price} img={item.image.url}/>
            })
          }
          </div>) : null}
        </div>
      </div>
    )
  }
}

export default RowBox