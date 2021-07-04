import React from 'react';
import Product from './product';


function ShopList({ ar }) {


  return (
    <>
      <div className="row justify-content-center mx-3">
        {ar.map(item => {
          return (
            <Product item={item} />
          )
        })}
      </div>
    </>
  )
}

export default ShopList