import React from 'react'
import './product.css'
import AttrSet from '../AttrSet/AttrSet'
import Gallery from './Gallery/Gallery'
import ProductPrice from './ProductPrice/ProductPrice'
import cartStore from '../../redux/CartState'
import ReactHtmlParser from 'react-html-parser'
import { useQuery } from '@apollo/client'
import { PRODUCT_SINGLE} from '../queries'


function injectProduct (Component) {
  const InjectedProduct = function (props) {
    const {data} = useQuery(PRODUCT_SINGLE,{variables: {id: props.match.params.id}}); 
    const product = data?.product  ? data.product : undefined;
    return <Component product = {product} />
  }
  return InjectedProduct
}

class productSingle extends React.Component {
  constructor (props) {
    super(props)   
    this.state = { item: this.props.product, attrPicked: false }    
    this.addToCart = this.addToCart.bind(this)
    this.setAttr = this.setAttr.bind(this)
  }

  addToCart (item) {
    const atrobj = {}
    this.state.item.attributes.forEach((atr) => {
      atrobj[atr.name] = this.state[atr.name]
    })
    const newItem = JSON.parse(JSON.stringify(item))
    newItem.pickedAttrs = atrobj
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
      if (JSON.stringify(element.pickedAttrs) === JSON.stringify(newItem.pickedAttrs) &&
      element.name === newItem.name) {
        k = index
      }
    })
    return k
  }

  componentDidUpdate (prevProps) {
    if (this.props.product !== prevProps.product) { 
      this.setState({ item: this.props.product })
    }
  }

  componentDidMount () {
    if (this.state.item) {
      const attributes = this.state.item.attributes
      if (!attributes.length) {
        this.setState({ attrPicked: true })
      }
      attributes.forEach((attr) => {
        this.setState({ [attr.name]: null })
      })
    }
  }

  setAttr (item, name) {
    this.setState({ attrPicked: true })
    this.setState({ [name]: item.value })
  }

  render () {   
    const product = this.state.item;
    const stock = this.state.attrPicked && product.inStock    
    return (
      product
        ? (<div>
          <div className="product-container">
            <Gallery gallery={product.gallery} stock={product.inStock}/>
            <div className="product-about">
              <div className="single-product-name">
                  <span>{product.brand}</span>
                  <p>{product.name}</p>
              </div>
              <div className="single-product-attributes">
                {!product.attributes.length
                  ? null
                  : product.attributes.map((item, index) => (
                    <AttrSet
                      key={`${item.name}_${index}`}
                      item = {item}
                      setAttr={this.setAttr}
                    />
                  ))
                }
              </div>
              <ProductPrice prices = {product.prices}/>
              <button
                disabled={!stock}
                className={`add-to-cart-single ${!stock ? 'btn-disabled' : ''}`}
                onClick={() => { this.addToCart(product) }}
              >
              add to cart</button>
              <div className="single-product-description" >
                {ReactHtmlParser(product.description)}
              </div>
            </div>
          </div>
        </div>
        ) 
        : null
    )
  }
}
export default injectProduct(productSingle)



