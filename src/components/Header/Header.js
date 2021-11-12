import React from 'react';
import Categories from '../Categories/Categories';
import Basket from '../Basket/Basket';
import CurrencyAndCart from '../CurrencyAndCart/CurrencyAndCart';
import './Header.css';

class Headerr extends React.Component {
  render () {
    return (
      <div className="header">
        <Categories />
        <Basket />
        <CurrencyAndCart />
      </div>
    )
  }
}

export default Headerr;