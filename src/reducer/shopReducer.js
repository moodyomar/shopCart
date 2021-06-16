const initState = {
  sideCart:'closed',
  addedToCart:[
   
  ]
}

export const shopReducer = (state = initState, action) => {
switch(action.type){
  case "TEST":
    return {...state,number:+1}

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
    
    

    default:
      return state
}
}