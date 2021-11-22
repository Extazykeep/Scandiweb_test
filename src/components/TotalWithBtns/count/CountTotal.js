export default function CountTotal (items, currency) {
  const whichone = { USD: 0, GBP: 1, AUD: 2, JPY: 3, RUB: 4 }
  return (items.reduce((amount, item) => (item.prices[whichone[currency]].amount * item.itemCount) + amount, 0)).toFixed(2)
}
