import React from 'react'
import './Currency.css'
import MiniCart from '../MiniCart/MiniCart'
import CustomSelect from '../CurrencyChanger/CurrencyChanger'

class CurrencyandCart extends React.Component {
  render () {
    return (
      <div className="currency">
        <CustomSelect />
        <MiniCart/>
      </div>
    )
  }
}
export default CurrencyandCart
