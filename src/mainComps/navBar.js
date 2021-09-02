import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { FaShoppingCart } from 'react-icons/fa';
import { Actions } from '../redux/actions/actions';


function Navbar({location}) {

  let [showMobileNav, setShowMobileNav] = useState(false)
  let addedToCart = useSelector(state => state.shopReducer.addedToCart)
  let dispach = useDispatch()

  const OpenSideCart = () => {
    dispach(Actions.openSideCart())
  }

    useEffect(() => {
 setShowMobileNav(false);
  },[location])

  return (
    <div className="container-fluid shadow pf-zindex">
      <div className="row align-items-center">
        <div className="logo col-lg-3 d-flex justify-content-between align-items-center">
          <div onClick={OpenSideCart} className='cartIcon'><FaShoppingCart className="fs-3" /></div>
          <h2 className="text-danger">LOGO</h2>
          <div className="burger" onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}>
            <i className="fa fa-bars fs-2" aria-hidden="true"></i>
          </div>
        </div>
        <nav className="col-lg-9 text-end shadow" style={{ transform: showMobileNav && "translateX(0%)" }}>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink exact activeClassName="active" to="/shop">Shop</NavLink>
          <NavLink exact activeClassName="active" to="/cart">Cart</NavLink>
          <FaShoppingCart onClick={OpenSideCart} className="fs-4 ms-3 desktopOnly cp" />
        </nav>
        {addedToCart.length > 0 &&
        <div className="cartNotification">{addedToCart.length}</div> 
        }
      </div>
    </div>
  )
}

export default Navbar