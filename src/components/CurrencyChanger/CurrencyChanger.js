import React from 'react'
import { Currencies } from '../queries'
import {
  useQuery
} from '@apollo/client'
import { currencyStore} from '../../redux/currencyStore'

function injectCurrencies (Component) {
  const InjectedCurrencies = function () {
    const currency = useQuery(Currencies)    
    return <Component currency={currency} />
  }
  return InjectedCurrencies
}

class CustomSelect extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      SelectText: '$',
      showOptionList: false,
      currencyList: []
    }
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentDidUpdate (prevProps) {    
    if (this.props.currency.data !== prevProps.currency.data) {
      const currencyList = this.props.currency.data.currencies;
      this.setState({ currencyList: currencyList })
    }
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = e => {
    if (
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text')
    ) {
      this.setState({
        showOptionList: false
      })
    }
  }

  handleListDisplay = () => {
    this.setState({ showOptionList: !this.state.showOptionList })
  };

  handleOptionClick = e => {
    const currency = e.target.getAttribute('data-name')
    const currrentCurrencyObject = this.state.currencyList.filter((item)=>  item.label === currency)[0]    
    currencyStore.dispatch({ type: currrentCurrencyObject.symbol })
    this.setState({
      SelectText: currrentCurrencyObject.symbol, showOptionList: false
    })
  };
  

  render () {
    const { currencyList, showOptionList, SelectText } = this.state
    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? 'selected-text active' : 'selected-text'}
          onClick={this.handleListDisplay}
        >
        {SelectText}
        </div>
        {showOptionList && (
          <ul className="select-options">
            {currencyList.length
              ? currencyList.map(currency => {
                return (
                <li
                  className="custom-select-option"
                  data-name={currency.label}
                  key={currency.label}
                  onClick={this.handleOptionClick}
                >
                 {} {currency.label}
                </li>
                )
              })
              : null}
          </ul>
        )}
      </div>
    )
  }
}

export default injectCurrencies(CustomSelect)
