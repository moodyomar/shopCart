const initState = {
  sideCart:'closed',
  addedToCart:[
  ]
}

export const shopReducer = (state = initState, action) => {
switch(action.type){

  case "CLOSE_SIDE_CART":
  return {...state,sideCart:'closed'}

  case "OPEN_SIDE_CART":
    console.log(state.addedToCart);
  return {...state,sideCart:''}

  case "ADD_TO_CART":
    return {...state,addedToCart:[...state.addedToCart,action.add]}

    case "DEL_FROM_CART":
      let temp_ar = state.addedToCart.filter(item => item.id !== action.del)
      return {...state,addedToCart:[...temp_ar]}

    case "INC_ITEM_QTY":
   let itemToInc = state.addedToCart.filter(item => item.id === action._id)[0]
   itemToInc.quantity++
    return {...state,addedToCart:[...state.addedToCart]}

    case "DEC_ITEM_QTY":
      let itemToDec = state.addedToCart.filter(item => item.id === action._id)[0]
      itemToDec.quantity--
       return {...state,addedToCart:[...state.addedToCart]}
    
    default:
      return state
}
}