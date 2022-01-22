import React from 'react'
import './CartItem.css'
import ItemAttributes from '../../../ItemAttributes/ItemAttributes'
import ItemsAmount from '../../../ItemsAmount/ItemsAmount'
import { currencyStore, whichone } from '../../../../redux/currencyStore'

class CartItem extends React.Component {
  constructor () {
    super()
    this.state = { currency: currencyStore.getState() }
    currencyStore.subscribe(() => this.setState({ currency: currencyStore.getState() }))
  }

  render () {
    const item = this.props.item
    const currency = this.state.currency   
    return (
      <div className="cart-item-wrapper">
         <div className="item-description">
          <div className="item-info">
              <div className="item-name">
                <span>{item.brand}</span>
                <div>{item.name}</div>
            </div>
              <p className="item-info__price">
                 {currency + item.prices[whichone[currency]].amount} 
              </p>
              <ItemAttributes item ={item} />
          </div>
           <ItemsAmount item = {item}/>
        </div>
        <div className="image-block">
            {<img src={item.gallery[0]} alt="item"/>}
        </div>
      </div>
    )
  }
}

export default CartItem
