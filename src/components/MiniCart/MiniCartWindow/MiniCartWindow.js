import React from 'react';
import TotalWithButtons from '../../TotalWithBtns/TotalWithButtons';
import CartItem from "./MiniCartItem/CartItem";



class MiniCartWindow extends React.Component {  
  render(){    
    const cartItems = this.props.cartItems;    
    const itemsLength = cartItems.length;
    return(
      <div className="cartWindow">          
      {     
      <div className="cart-menu">
        <div>
          <h3 style={{display: "inline"}}>My bag, </h3>                 
          <span style={{fontWeight: "bold"}}>{itemsLength} {itemsLength === 1 ? "item" : "items"}.</span>
        </div>
        <div className="items-wrapper">
          {cartItems.map((item,index)=> (
            <CartItem key={`${item.name}_${index}`} item={item}/>
          ))}
        </div> 
        <TotalWithButtons setOverlayyy={this.props.setOverlayyy} cartItems = {cartItems}/>
      </div>             
      }
  </div> 
    )
  }
}

export default MiniCartWindow