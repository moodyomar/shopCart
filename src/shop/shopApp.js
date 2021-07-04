import React from 'react';

import ShopList from './shopList';
import SideCart from "./sideCart";
import { fakeStoreJson as ar } from "../fakeStore"


function shopApp(props) {

  return (
      <>
      <div className="siteHeading">Shop Now</div> 
        <SideCart />
        <ShopList ar={ar} />
      </>
  )
}

export default shopApp