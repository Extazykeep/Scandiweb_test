export default function filterReducer(state = 'USD', action) {
  switch (action.type) {
    case "GBP":
      return "GBP";
    case "USD":
      return "USD"
    case "AUD":
      return "AUD"
    case "RUB":
      return "RUB"
    case "JPY":
      return "JPY"
    default:
      return state
  }
}