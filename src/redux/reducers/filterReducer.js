export default function filterReducer(state = 'all', action) {
  switch (action.type) {
    case 'all':
      return 'all';
    case 'tech':
      return 'clothes'
    case 'clothes':
      return 'tech'
    default:
      return state
  }
}