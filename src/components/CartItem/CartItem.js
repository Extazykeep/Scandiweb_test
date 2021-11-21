import React from 'react';
import ItemsAmount from '../ItemsAmount/ItemsAmount';
import './CartItem.css';
import { currencyIcon,currencyStore } from '../../redux/currencyStore';
import ItemAttributes from '../ItemAttributes/ItemAttributes';


class CartItem extends React.Component {  
  constructor(){
    super();
    this.state = {currency: currencyStore.getState()};
    currencyStore.subscribe(() => this.setState({currency: currencyStore.getState()}))    
  }
  render() {
    const item = this.props.item;    
    const icon = currencyIcon; 
    const currency = this.state.currency
    return (
      <div className="cart-item">
        <hr></hr>
        <div className="item-content">
          <div className="item-desc">
            <div className="item-name">
                <span>{item.name.replace(/ .*/,'')}</span>
                <div>{item.name.match(/ .*/)}</div>
            </div>            
            <p className="cart-price">
              {icon[currency] + item.prices.filter((item)=> item.currency === currency)[0].amount}
            </p>
            <div className="cart-attribute__set">
              <ItemAttributes item = {item}/>
            </div>
          </div>
          <div className="quantityandthumb">
              <ItemsAmount item = {item}/>
              <div className="thumbnail">
                <div><img src={item.gallery[0]} alt="galleryitem"/></div>
                
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CartItem;