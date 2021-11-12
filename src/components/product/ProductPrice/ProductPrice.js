import React from 'react';
import { currencyIcon,currencyStore} from '../../../redux/currencyStore';


class ProductPrice extends React.Component {
  constructor(){
    super()
    this.state = {currency: currencyStore.getState()};
    currencyStore.subscribe(() => this.setState({currency: currencyStore.getState()}))
  }
  render(){
    const prices = this.props.prices;
    const icon = currencyIcon;
    return (
      <div className="single-product-price">
          <span>price: </span>
           <p className="cart-price">{icon[this.state.currency] + prices.filter((item)=> item.currency === this.state.currency)[0].amount}</p>
      </div>  
   )
  }
}

export default ProductPrice