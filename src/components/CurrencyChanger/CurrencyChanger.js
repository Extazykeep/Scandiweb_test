import React from 'react'
import { Currencies } from '../queries'
import {
  useQuery
} from '@apollo/client'
import { currencyStore, currencyIcon } from '../../redux/currencyStore'

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
      SelectText: '',
      showOptionList: false,
      currencyList: []
    }
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
    this.setState({
      SelectText: currencyIcon[currencyStore.getState()]
    })
  }

  componentDidUpdate (prevProps) {
    if (this.props.currency !== prevProps.currency) {
      const currencyList = this.props.currency.data.currencies
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
    const selectEd = e.target.innerHTML.split(' ')[0]
    currencyStore.dispatch({ type: currency })
    this.setState({
      SelectText: selectEd, showOptionList: false
    })
  };

  render () {
    const { currencyList, showOptionList, SelectText } = this.state
    const icon = currencyIcon
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
                  data-name={currency}
                  key={currency}
                  onClick={this.handleOptionClick}
                >
                 {icon[currency]} {currency}
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
