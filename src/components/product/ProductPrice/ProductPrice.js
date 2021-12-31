import React from 'react'
import {currencyStore, whichone} from '../../../redux/currencyStore'

class ProductPrice extends React.PureComponent {
  constructor () {
    super()
    this.state = { currency: currencyStore.getState() }
    currencyStore.subscribe(() => this.setState({ currency: currencyStore.getState()}))
  }
  render () {
    const prices = this.props.prices
    const currency = this.state.currency
    return (
      <div className="single-product-price">
          <span>price: </span>
          <p className="cart-price">
            {currency + prices[whichone[currency]].amount}
          </p>
      </div>
    )
  }
}

export default ProductPrice
