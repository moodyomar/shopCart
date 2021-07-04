import React from 'react';
import { fakeStoreJson as ar } from "../fakeStore"
import ShopList from '../shop/shopList';
import {
  Link
} from "react-router-dom";

function Home(props) {
  let latestProds = ar.slice(0,3)
  return (
    <>
      <div className="siteHeading">Home work</div>
      <ShopList ar={latestProds} />
      
      <div className="m-4 d-flex justify-content-center">
        <Link to="/shop"><button className="btn btn-dark">All Products</button></Link>
        </div>
    </>
  )
}

export default Home