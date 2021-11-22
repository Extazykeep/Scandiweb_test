import React from 'react'
import './ProductPage.css'
import ProductsList from '../ProductList/ProductsList'
import { withRouter } from 'react-router-dom'

class ProductPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { currentFilter: 'all' }
    this.possibleFilters = ['all', 'tech', 'clothes']
  }

  componentDidMount () {
    this.filter = this.props.location.pathname.replace('/', '')
    if (this.possibleFilters.includes(this.filter) && this.filter !== this.state.currentFilter) {
      this.setState({ currentFilter: this.filter })
    }
  }

  componentDidUpdate () {
    this.filter = this.props.location.pathname.replace('/', '')
    if (this.possibleFilters.includes(this.filter) && this.filter !== this.state.currentFilter) {
      this.setState({ currentFilter: this.filter })
    }
  }

  render () {
    const filter = this.state.currentFilter
    return (
      <div className="main">
        <span>{filter}</span>
        <div className="goodsWrapper">
          <ProductsList filter={filter} />
        </div>
      </div>
    )
  }
}
export default withRouter(ProductPage)
