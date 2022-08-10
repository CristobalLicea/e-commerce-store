import React from "react";
import { api2 } from "../api/constants";
import './pageBox.css'

class PageBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
    try {
      await api2.get('/?limit=4&category_slug=' + this.props.category).then(res => {
        this.setState({
          items: res.data.data
        })
      })
    } catch (error) {
      console.log(error)
    }
    
  }

  clicked = (e) => {
    this.props.showProduct(e.target.id)
  }

  category = (e) => {
    this.props.updateCategory(this.props.category)
  }

  render() {

    return (
      <div className="pageBox">
        <h2 onClick={this.category}>{this.props.title}</h2>
        {this.state.items ? (
          <div className="showSpace">
            {this.state.items.map(item => 
              <div className="item" onClick={this.clicked} id={item.id} key={item.id}>
                <div className="imgSpace1">
                  <img src={item.image.url} id={item.id} alt="" />
                </div>
                <p>{item.name}</p>
              </div>
            )}
        </div>
        ):(
          <div></div>
        )}
        
      </div>
    )
  }
}

export default PageBox