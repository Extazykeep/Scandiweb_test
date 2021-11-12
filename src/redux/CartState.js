import { createStore } from 'redux'

const initialState = { 
  cartItems: []
}

const cartsItems = (state = initialState,action) => {
  switch(action.type){
   case "ADD_PRODUCT":
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload]
    }; 
    case "INCREMENT":
        return {
          ...state,
          cartItems: state.cartItems.map((item,index)=> {if(index === action.payload) {return item = {...item, itemCount: item.itemCount +1}} else {return item}}  )
          }
     case "DECREMENT":
         return {
          ...state,
          cartItems: state.cartItems.map((item,index)=> {if(index === action.payload) {return item = {...item, itemCount: item.itemCount - 1}} else {return item}}  )
         }      
   case "REMOVE_PRODUCT":
    return {
      ...state,
      cartItems: state.cartItems.filter((item)=> ((item.name !== action.payload[1]) || (JSON.stringify(item.pickedAttrs) !== JSON.stringify(action.payload[0])))),
      
     };    
    default: 
      return state
  }
}  

let cartStore = createStore(cartsItems)

export default cartStore;