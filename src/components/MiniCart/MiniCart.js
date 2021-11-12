import React from 'react';
import imagesource from '../../images/EmptyCart.png';
import  './MiniCart.css';
import MiniCartWindow from './MiniCartWindow/MiniCartWindow'
import cartStore from "../../redux/CartState"

class MiniCart extends React.Component {
  constructor(props){
    super(props);  
    this.state = {overlayOpened: false, cartItems: []};
    this.setOverlayyy =this.setOverlayyy.bind(this);  
    cartStore.subscribe(()=>{this.setState({cartItems: cartStore.getState().cartItems })}) 
  }  
  setOverlayyy (){
    this.setState({overlayOpened: !this.state.overlayOpened})
  }
  render(){
    const cartItems = this.state.cartItems;
    const itemsLength =  this.state.cartItems.length ? cartItems.reduce((a,b)=> ({itemCount: a.itemCount + b.itemCount})).itemCount : 0;    return (
      <div className="cartBox" >
        <img className="basket" src={imagesource} alt="empty" onClick = {()=>{this.setOverlayyy()}} />
         <div className="items-count">{itemsLength}</div> 
        {
        this.state.overlayOpened && 
         <MiniCartWindow setOverlayyy={this.setOverlayyy} itemsLength={itemsLength} cartItems={cartItems}  />         
        }
        <div onClick={()=>{this.setOverlayyy()}} className={this.state.overlayOpened ? "darkmode" : ""}></div> 
      </div>
    )
  }
}
export default MiniCart