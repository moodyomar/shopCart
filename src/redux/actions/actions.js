export const Actions = {
  closeSideCart:() => {
    return {type:"CLOSE_SIDE_CART"}
  },
  openSideCart:() => {
    return {type:"OPEN_SIDE_CART"}
  },
  addToCart:(_product) => {
    return {type:"ADD_TO_CART",add:_product}
  },
  deleteFromCart:(_id) => {
    return {type:"DEL_FROM_CART",del:_id}
  },
  incrementQty:(_id) => {
    return {type:"INC_ITEM_QTY",_id}
  },
  decrementQty:(_id) => {
    return {type:"DEC_ITEM_QTY",_id}
  }
}