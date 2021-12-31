export default function CountTotal (items, currency ,whichone) {
  return (items.reduce((amount, item) => (item.prices[whichone[currency]].amount * item.itemCount) + amount, 0)).toFixed(2)
}
