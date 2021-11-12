import React from 'react';
import productStore from '../../redux/productStore';
import './product.css';
import AttrSet from '../AttrSet/AttrSet';
import Gallery from './Gallery/Gallery'
import ProductPrice from './ProductPrice/ProductPrice';
import cartStore from "../../redux/CartState"

class productSingle extends React.Component {
  constructor(){   
    super() 
    this.state = {item: productStore.getState().state, attrPicked: false};
    this.addToCart = this.addToCart.bind(this);
    this.setAttr = this.setAttr.bind(this);
  }
  addToCart(item) {
    const atrobj = {};
    this.state.item.attributes.forEach((atr)=>{
      atrobj[atr.name] = this.state[atr.name];
    })
    const newItem =  JSON.parse(JSON.stringify(item));
    newItem.pickedAttrs = atrobj;
    newItem.itemCount = 1;
    if(this.findSimilar(newItem) !== -5){
      cartStore.dispatch({type: "INCREMENT", payload: this.findSimilar(newItem)})
    }
    else { 
    cartStore.dispatch({type: "ADD_PRODUCT", payload: newItem});
    }
  }
  findSimilar(newItem){
    let k = -5;
    cartStore.getState().cartItems.forEach((element,index)=>{ 
      if(JSON.stringify(element.pickedAttrs)===JSON.stringify(newItem.pickedAttrs) && element.name === newItem.name ) {
        k = index;
        return
      }
    })
    return k
  } 
  componentDidMount(){
    if(this.state.item){
      const attributes = this.state.item.attributes;   
    if(!attributes.length){
      this.setState({attrPicked: true})
    } 
    attributes.forEach((attr)=> {
      this.setState({[attr.name]: null})
    })
    }
  }
  setAttr(item,name){
    this.setState({attrPicked: true}) 
    this.setState({[name]: item.value}) 
  }
  render(){
    const product = this.state.item;       
    return (
      product ?  
      <div>
        <div className="product-container">
          <Gallery gallery={product.gallery}/>
          <div className="product-about">
            <div className="single-product-name">
                <span>{product.name.replace(/ .*/,'')}</span>
                <p>{product.name.match(/ .*/)}</p>
            </div>
            <div className="single-product-attributes">
                {!product.attributes.length ? null :
                    product.attributes.map((item,index)=> (
                      <AttrSet key={`${item.name}_${index}`}  item = {item} setAttr={this.setAttr}/>
                    ))
                }  
            </div>
            <ProductPrice prices = {product.prices}/> 
            <button  disabled={!this.state.attrPicked} className={`add-to-cart-single ${!this.state.attrPicked ? 'btn-disabled' : ''}`} onClick={()=>{this.addToCart(product)}} > add to cart</button>
            <div className="single-product-description" dangerouslySetInnerHTML={{ __html: product.description }}>
            </div>
          </div>
        </div> 
      </div>
      : null    
    )
  }
} 
export default productSingle;


