import React from 'react';
import CartContext from '../../context/CartContext';
import './CartPage.css';

class CartPage extends React.Component {
  static contextType = CartContext;
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className="main">        
        <div className="goodsWrapper">
            <div className="images-gallery">
                <div className="images-thumbs">
                  <div className="thumb-wrapper">
                   <img src={this.context.cartItems[0].gallery[0]}/>
                  </div>
                  <div className="thumb-wrapper">
                   <img src={this.context.cartItems[0].gallery[0]}/>
                  </div>
                  <div className="thumb-wrapper">
                   <img src={this.context.cartItems[0].gallery[0]}/>
                  </div> 
                </div> 
                <div className="main-image">
                  <img src={this.context.cartItems[0].gallery[0]}/>
                </div> 
            </div>
        </div>
      </div>
    )
  }    
}

export default CartPage