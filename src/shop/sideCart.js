import { AiFillCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux"
import { Actions } from '../redux/actions/actions';

function SideCart(props) {

  let sideCart = useSelector(state => state.sideCart)
  let addedToCart = useSelector(state => state.addedToCart)
  let dispatch = useDispatch()


  ﻿

  
  

  return (
    <div className={`shadow sideCart ${sideCart}`}>
      <div onClick={() => {
        dispatch(Actions.closeSideCart())
      }} className="text-end me-2 mt-2 cp"><AiFillCloseCircle className="text-dark fs-3" /></div>
      <div className="mt-2 h-100">

        <div>
          {addedToCart.map(prod => {
            return (
              <>
                <div className="productInCart d-flex ">
                  <div className="pImage  col" style={{backgroundImage:`url(${prod.image})`}}></div>
                  <div className="pTitle  col-4">{prod.title.substr(0, 19)}</div>
                  <div onClick={() => {
                    prod.inCart = false;
                    dispatch(Actions.deleteFromCart(prod.id))
                  }} className="pClose  me-3 text-end col-2"><AiOutlineCloseCircle className="fs-5 cp" /></div>
                </div>
                <div className="d-flex justify-content-center">
                  1 x {prod.price}$
                </div>
                <hr />
              </>
            )
          })}

        </div>
        <div className="pPrice text-center mt-5">Subtotal: {addedToCart.reduce((acc,cv) =>  acc += cv.price , 0).toFixed(2)}$</div>
        <hr />
        <div className="d-flex justify-content-center"><button className="btn btn-dark me-2">View Cart</button>
          <button className="btn btn-dark">Checkout</button></div>
      </div>
    </div>
  )
}

export default SideCart

// cart array in reducer