import React from 'react'
import './ProductItem.css'
import {currencyStore, whichone } from '../../redux/currencyStore'
import CartIcon from '../../images/CircleIcon.png'
import { Link } from 'react-router-dom'
import cartStore from '../../redux/CartState'

class ProductItem extends React.Component {
  constructor () {
    super()
    this.state = { currency: currencyStore.getState(), amount: 0, incart: false }
    currencyStore.subscribe(() => this.setState({ currency: currencyStore.getState() }))    
    /* CartState.subscribe(() => { this.isInCart() }) */
  }
  addIntoCart(item){
    const newItem = JSON.parse(JSON.stringify(item))
    newItem.itemCount = 1
    if (this.findSimilar(newItem) !== -5) {      
      cartStore.dispatch({ type: 'INCREMENT', payload: this.findSimilar(newItem) })
    } else {
      cartStore.dispatch({ type: 'ADD_PRODUCT', payload: newItem })
    }
  }
  findSimilar (newItem) {
    let k = -5
    cartStore.getState().cartItems.forEach((element, index) => {
      if (JSON.stringify(element.name === newItem.name)){
        k = index
      }
    })
    return k
  }
/*
  componentDidMount () {
    this.isInCart()
  }
 */
 /*  isInCart () {
    if (!CartState.getState().cartItems.length) {
      this.setState({ incart: false })
    }
    const arr = []
    CartState.getState().cartItems.forEach(element => {
      if (this.props.product.name === element.name) {
        arr.push(element.name)
      }
    })
    if (arr.includes(this.props.product.name)) {
      this.setState({ incart: true })
    } else { this.setState({ incart: false }) }
  } */

  render () {
    const product = this.props.product
    const currency = this.state.currency    
    const isPossible = !product.attributes.length && product.inStock      
    return (
      <div className="item-wrapper">
       <Link
        className="link-wrapper"
        to={'/product/' + product.id}
       >
        <div className={!product.inStock ? 'outofstock' : ''}>
          <div className="image-wrapper">
            <img src={product.gallery[0]} alt="galery" className="product-image"/>
           {/*  {this.state.incart ? <img src={CartIcon} alt="cart-icon" className="small-cart__icon"/> : null} */}
          </div>
            <p className="product-name">
              {product.brand + " " + product.name}
            </p>            
            <p className="product-price">
              {currency}{product.prices[whichone[currency]].amount }
            </p>
            {
              product.inStock
                ? null
                : <div className="outoffilter">
                <p className="outof">out of stock</p>
              </div>
            }
        </div>
         </Link>
         {isPossible && <button onClick={()=>{this.addIntoCart(product)}} className="addintcoart">
          <img src={CartIcon} alt="cart" />
          </button>}
      </div>

    )
  }
}
export default ProductItem
