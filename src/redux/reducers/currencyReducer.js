export default function filterReducer (state = '$', action) {
  switch (action.type) {
    case '£':
      return '£'
    case '$':
      return '$'
    case 'A$':
      return 'A$'
    case '₽':
      return '₽'
    case '¥':
      return '¥'
    default:
      return state
  }
}
