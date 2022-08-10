import React from "react";
import AdBox from "../adBox/adBox";
import RowBox from "../adBox/adRow";
import SmallBox from "../adBox/smallBox";
import ItemBox from "../itemBox/itemBox";
import PageBox from "../pageBox/pageBox";
import './home.css'
import {api2} from "../api/constants";

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
    try {
      await api2.get('/?limit=25',).then(res => {
        this.setState({
          data: res.data.data,
          loaded:true
        })
      }) 
    } catch (err) {
        console.log("error")
    }
  }

  render() {

    return (
    (this.state.loaded ? (
      <div id="homePage">
        <AdBox />
        <PageBox title='50% Off' updateCategory={this.props.updateCategory} showProduct={this.props.showProduct} category='50-discount'/>
        <SmallBox topDesc='Reserve Pickup or Delivery' botDesc="Popular Services"/>
        <PageBox title='Apparel' updateCategory={this.props.updateCategory} showProduct={this.props.showProduct} category='apparel'/>
        <PageBox title='Beauty & Health' updateCategory={this.props.updateCategory} showProduct={this.props.showProduct} category='beauty-health'/>
        {(this.state.loaded ? (
          this.state.data.map(item =>
            <ItemBox name={item.name} key={item.name} image={item.image.url} id={item.id} price={item.price.raw} showProduct={this.props.showProduct} refreshCart={this.props.refreshCart} cartId={this.props.cartId} stock={item.inventory.available}/>)
        ):(
          <></>
        ))}
        
      </div>
    ):(
      <div></div>
    ))
    
    )
  }
}

export default Home