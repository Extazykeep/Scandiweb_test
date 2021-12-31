import { createStore } from 'redux'
import currencyReducer from './reducers/currencyReducer'
const whichone = { '$': 0, "£": 1, "A$": 2, "¥": 3, "₽": 4 };
const currencyStore = createStore(currencyReducer)

export { currencyStore,whichone }
