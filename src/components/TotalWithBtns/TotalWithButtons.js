import React from 'react'
import CountTotal from './count/CountTotal'
import { Link } from 'react-router-dom'
import {currencyStore, whichone} from '../../redux/currencyStore'

class TotalWithButtons extends React.Component {
  constructor () {
    super()
    this.state = { currency: currencyStore.getState() }
    currencyStore.subscribe(() => this.setState({ currency: currencyStore.getState() }))
  }

  render () {
    const currencyIcon = this.state.currency   
    return (
        <div className="totalandbtns">
          <div className="total-price">
              <span>Total</span>
              <span>{currencyIcon + CountTotal(this.props.cartItems, currencyIcon , whichone)}</span>
          </div>
          <div className="bagandcheck">
            <Link to="/cart" onClick={() => { this.props.setOverlayyy() }}>
              <button className="view-bag">view bag</button>
            </Link>
            <button className="checkout">
              check out
            </button>
          </div>
        </div>
    )
  }
}

export default TotalWithButtons
