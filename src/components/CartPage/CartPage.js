import React from 'react'
import './CartPage.css'
import CartItem from '../CartItem/CartItem'
import cartStore from '../../redux/CartState'

class CartPage extends React.Component {
  constructor () {
    super()
    this.state = { cartItems: cartStore.getState().cartItems }
    cartStore.subscribe(() => { this.setState({ cartItems: cartStore.getState().cartItems }) })
  }

  render () {
    const cartItems = this.state.cartItems
    return (
      <div className="main-cart">
        <span className="cart">CART</span>
        <div className="items-wrapper">
          {
            !cartItems.length
              ? null
              : cartItems.map((item, index) => (
              <CartItem key = {index} item={item}/>
              ))
           }
        </div>
      </div>
    )
  }
}
export default CartPage
