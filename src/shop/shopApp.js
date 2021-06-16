import React from 'react';

import ShopList from './shopList';
import SideCart from "./sideCart";
import { fakeStoreJson as ar } from "../fakeStore"



function shopApp(props) {

  return (
      <>
        <SideCart />
        <ShopList ar={ar} />
      </>
  )
}

export default shopApp