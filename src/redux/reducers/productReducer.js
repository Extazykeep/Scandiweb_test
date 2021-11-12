const productReducer = (state = {},action) => {
  switch(action.type) {
    case "ADD_PRODUCT": {
      return {
        state: action.item
      };    
    } 
    default: 
      return state
  }
}

export default productReducer;