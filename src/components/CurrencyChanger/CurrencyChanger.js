import React from 'react';
import {Currencies} from '../queries';
import {
  useQuery
} from "@apollo/client";
import {currencyStore} from '../../redux/currencyStore'


function injectCurrencies(Component) {
  const InjectedCurrencies= function () {
    const currency = useQuery(Currencies);
    return <Component  currency={currency} />;
  };
  return InjectedCurrencies;
}

class CurrencyChanger extends React.Component {
  constructor(props){
    super(props)
    this.state = {value : ""};
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate(prevProps) {        
    if (this.props.currency !== prevProps.currency) {      
       let data = this.props.currency.data.currencies; 
      this.setState({data}) 
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    currencyStore.dispatch({ type: event.target.value })
  }
  render(){
    const {loading, error} = this.props.currency;       
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
    <select value={this.state.value} onChange={this.handleChange}> 
        {this.state.data ? this.state.data.map((currency,index)=> (
            <option key={index}>{currency} </option>
    )) :null}
    </select>
    )
  }
}

export default injectCurrencies(CurrencyChanger)