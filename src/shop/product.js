import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { Actions } from '../actions/actions';

function Product({ item }) {
  let [showMore, setShowMore] = useState(false)
  let dispatch = useDispatch()

  return (
    <>
      <div key={item.id} className="col-lg-3 col-md-5 col-sm-5 mb-5 mx-3 p-3 border text-center shadow">
        <div className="productImage" style={{backgroundImage:`url(${item.image})`}}></div>
        <h3 className="mt-2">{item.title.substr(0, 19)}</h3>
        <h4 className="badge bg-warning">{item.category}</h4>
        {showMore && <p>{item.description.substr(0, 150)}..</p>}
        <p onClick={() => {
          setShowMore(!showMore)
        }}>show more</p>
        <h4>{item.price}$</h4>
        
        { !item.inCart ? 
        <button onClick={() => {
          dispatch(Actions.openSideCart())
          item.inCart = true;
          dispatch(Actions.addToCart(item))
        }} className="btn btn-dark me-2">ADD TO CART</button> :
        <button onClick={() => {
          item.inCart = false;
          dispatch(Actions.deleteFromCart(item.id))
        }} className="btn btn-success me-2"> in Cart</button>
        }
        
        <button className="btn btn-secondary">BUY NOW</button>

      </div>
    </>
  )
}

export default Product

// category: "men's clothing",
// id: 1,
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// price: 109.95,
// title: "iPad Pro"