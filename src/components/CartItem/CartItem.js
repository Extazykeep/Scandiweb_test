import React from 'react'
import ItemsAmount from '../ItemsAmount/ItemsAmount'
import './CartItem.css'
import {currencyStore,whichone } from '../../redux/currencyStore'
import ItemAttributes from '../ItemAttributes/ItemAttributes'
import SliderGallery from './SliderGallery'

class CartItem extends React.Component {
  constructor () {
    super()
    this.state = { currency: currencyStore.getState() }
    currencyStore.subscribe(() => this.setState({ currency: currencyStore.getState() }))
  }

  render () {
    const item = this.props.item
    const currency = this.state.currency
    const gallery = item.gallery
    return (
      <div className="cart-item">
        <hr></hr>
        <div className="item-content">
          <div className="item-desc">
            <div className="item-name">
                <span>{item.name.replace(/ .*/, '')}</span>
                <div>{item.name.match(/ .*/)}</div>
            </div>
            <p className="cart-price">
              {currency + item.prices[whichone[currency]].amount}
            </p>
            <div className="cart-attribute__set">
              <ItemAttributes item = {item}/>
            </div>
          </div>
          <div className="quantityandthumb">
              <ItemsAmount item = {item}/>
              <SliderGallery gallery={gallery}/>
          </div>
        </div>
      </div>
    )
  }
}
export default CartItem
