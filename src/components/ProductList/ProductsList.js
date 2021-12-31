import React from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_Products } from '../queries'
import ProductItem from '../ProductItem/ProductItem'

function injectProducts (Component) {
  const InjectedProducts = function (props) {
    const category = props.filter;
    const response = useQuery(FETCH_Products,
      { variables: { categoryInput: { title: category } } }
    )
    return <Component products={response} />
  }
  return InjectedProducts
}

class ProductsList extends React.PureComponent {
  render () {
    const { data, loading, error } = this.props.products
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}(</p>
    return data
      ? data.category.products.map((product, index) => (
      <ProductItem
        key={`${product.name}_${index}`}
        id={index}
        product = {product}
      />
      ))
      : null
  }
}

export default injectProducts(ProductsList)
