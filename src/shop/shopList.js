import React, { useEffect } from 'react';
import Product from './product';


function ShopList({ar}){
  
  useEffect(() => {
console.log(ar);
})

  return(
    <>
<div className="siteHeading">Shop Now</div> 
<div className="row justify-content-center mx-3">
  {ar.map(item => {
    return(
      <Product item={item} />
    )
  })}
</div>
    </>
  )
}

export default ShopList