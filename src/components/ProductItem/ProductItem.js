import React from 'react'
import './ProductItem.css'
import { currencyIcon, currencyStore } from '../../redux/currencyStore'
import CartIcon from '../../images/CircleIcon.png'
import { Link } from 'react-router-dom'
import CartState from '../../redux/CartState'

class ProductItem extends React.Component {
  constructor () {
    super()
    this.state = { currency: currencyStore.getState(), amount: 0, incart: false }
    this.isInCart = this.isInCart.bind(this)
    currencyStore.subscribe(() => this.setState({ currency: currencyStore.getState() }))
    CartState.subscribe(() => { this.isInCart() })
  }

  componentDidMount () {
    this.isInCart()
  }

  isInCart () {
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
  }

  render () {
    const icon = currencyIcon
    const product = this.props.product
    const currency = this.state.currency
    return (
      <div className="item-wrapper">
       <Link
        className="link-wrapper"
        to={'/product/' + product.name}
       >
        <div className={!product.inStock ? 'outofstock' : ''}>
          <div className="image-wrapper">
            <img src={product.gallery[0]} alt="galery" className="product-image"/>
            {this.state.incart ? <img src={CartIcon} alt="cart-icon" className="small-cart__icon"/> : null}
          </div>
            <p className="product-name">
              {product.name}
            </p>
             <p className="product-name">
              {product.attributes.name}
            </p>
            <p className="product-price">
              {icon[currency]}{product.prices.filter((item) => item.currency === currency)[0].amount}
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
      </div>

    )
  }
}
export default ProductItem
