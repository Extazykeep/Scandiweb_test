import React from 'react';
import './ProductPage.css';
import ProductsList from '../ProductList/ProductsList';

class ProductPage extends React.Component {
  render() {
    return (
      <div className="main">
        <span>Category name</span>
        <div className="goodsWrapper">
            <ProductsList />
        </div>
      </div>
    )
  }
}
export default ProductPage