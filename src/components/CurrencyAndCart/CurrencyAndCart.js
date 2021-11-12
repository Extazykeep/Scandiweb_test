import React from 'react';
import './Currency.css';
import MiniCart from '../MiniCart/MiniCart';
import CurrencyChanger from '../CurrencyChanger/CurrencyChanger';


class CurrencyandCart extends React.Component {
  render() {
    return (
      <div className="currency">
        <CurrencyChanger />
        <MiniCart/>
      </div>
    )
  }
}
export default CurrencyandCart