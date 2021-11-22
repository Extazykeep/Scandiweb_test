import { createStore } from 'redux'
import currencyReducer from './reducers/currencyReducer'

const currencyIcon = { USD: '$', GBP: '£', AUD: 'A$', RUB: 'P', JPY: '¥' }

const currencyStore = createStore(currencyReducer)

export { currencyIcon, currencyStore }
