import React from "react";
import { api2 } from "../api/constants";
import ItemBox from "../itemBox/itemBox";

class SearchResult extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
    }
  }

  async componentDidMount() {
    try {
       await api2.get('/?', {
        params: {
          query: this.props.entry
        }
      }).then(res => {
        this.setState({
          entry: res.data.data
        })
      })
    } catch (err) {
        console.log("Could not get items")
    }
  }

  render() {

    return (
      <div>
        {(this.state.entry ? (
          this.state.entry.map(item =>
            <ItemBox name={item.name} key={item.name} image={item.image.url} id={item.id} price={item.price.raw} showProduct={this.props.showProduct} cartId={this.props.cartId} refreshCart={this.props.refreshCart} stock={item.inventory.available}/>)
        ):(
          <></>
        ))}
      </div>
    )
  }
}

export default SearchResult