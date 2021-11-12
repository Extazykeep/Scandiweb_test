import React from 'react'
import {
  useQuery
} from "@apollo/client";
import {Products} from '../queries';
import ProductItem from '../ProductItem/ProductItem';
import filterStore from '../../redux/filterStore'


function injectProducts(Component) {
  const  InjectedProducts =  function () {
    const response = useQuery(Products); 
    return <Component  products={response} />;
  };
  return InjectedProducts;
}

class ProductsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: []};    
    this.filterItems = this.filterItems.bind(this);
    filterStore.subscribe(() => this.filterItems(filterStore.getState()));
  } 
  componentDidMount(){
    if(this.props.products.data) {
      const data = this.props.products.data.category.products;
      this.setState({data}) 
      this.filterItems(filterStore.getState())
   } 
  }
  componentWillReceiveProps(nextProps) {
    const data = nextProps.products.data.category.products;
    this.setState({ data });
  } 
  filterItems(filterAtribute){
    const data = this.props.products.data.category.products.filter((product) => product.category !== filterAtribute);
    this.setState({data})
  }
  render() {
    const {loading, error} = this.props.products;               
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>; 
    return this.state.data  ? this.state.data.map((product,index)=> (
      <ProductItem key={`${product.name}_${index}`} id={index} product = {product} />
    ))  : null
  } 
}

export default injectProducts(ProductsList) 
