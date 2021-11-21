import React from 'react';
import './ItemsAmount.css'
import cartStore from '../../redux/CartState';


class ItemsAmount extends React.Component {
  constructor(props){
    super(props)
    this.quantityHanlder = this.quantityHanlder.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.findSimilar = this.findSimilar.bind(this);
  }
  quantityHanlder(type,attrs,name){
    if(type === "plus") 
      {
        cartStore.dispatch({type: "INCREMENT", payload: this.findSimilar(attrs,name)})
      }  
    if(type === "minus" && 
    cartStore.getState().cartItems[this.findSimilar(this.props.item.pickedAttrs,name)].itemCount === 1)
      {
        this.removeItem([attrs,name])      
      }
    if(type === "minus")
      {
        cartStore.dispatch({type: "DECREMENT", payload: this.findSimilar(attrs,name)})
      }
  }
  findSimilar(attrs,name){
    let k = null;
    cartStore.getState().cartItems.forEach((element,index)=>{
      if((element.pickedAttrs === attrs) && element.name === name) { 
        k = index;
        return
      }
    })
    return k
  } 
  removeItem(attrs){ 
    cartStore.dispatch({type: "REMOVE_PRODUCT", payload: attrs})     
  }
  render(){ 
    let attrs =  this.props.item.pickedAttrs;
    let name = this.props.item.name;    
    return (
      <div className="items-amount">
        <button onClick={()=>{this.quantityHanlder("plus",attrs,name)}}>+</button>
        <p>{this.props.item.itemCount}</p>
        <button onClick={()=>{this.quantityHanlder("minus",attrs,name)}}>-</button>
      </div>
    )
  }
}

export default ItemsAmount;


