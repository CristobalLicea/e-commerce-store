import React from "react";
import ItemBox from "../itemBox/itemBox";
import './category.css'

class Category extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="categoryPage">
         {(!this.state.loaded ? (
          this.props.items.map(item =>
            <ItemBox name={item.name} key={item.name} refreshCart={this.props.refreshCart} image={item.image.url} id={item.id} price={item.price.raw} showProduct={this.props.showProduct} cartId={this.props.cartId} quantity={item.inventory.available}/>)
        ):(
          <></>
        ))}
      </div>
    )
  }
}

export default Category