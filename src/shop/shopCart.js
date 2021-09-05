import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../redux/actions/actions';

function ShopCart(props) {
  let addedToCart = useSelector(state => state.shopReducer.addedToCart);
let subtotal = addedToCart.reduce((acc, cv) => acc += (cv.price * cv.quantity), 0).toFixed(2)
let total = subtotal > 30 ? 9.99 : 0.00
  let dispatch = useDispatch();
  return (
    <>
      <div className="siteHeading">Cart</div>

      <div className="row my-4">
        <div className="col  productList">
          {/* this row map for each product in cart  */}
          {addedToCart.map(product => {
            return (
              <div className="row p-2">
                <div className="col-lg-8   product">
                  <img src={product.image} alt="" class="float-start me-2 p-1 w-25" />
                  <h4 class="h5 mt-1">{product.title.substr(0, 19)}</h4>
                  <p>{product.category}</p>
                  <strong>{(product.price * product.quantity).toFixed(2)}</strong>
                </div>
                <div className="col-lg-3  quantity text-center">
                  <button onClick={() => dispatch(Actions.incrementQty(product.id))}  className="btnz shadow">+</button>
                  <strong className="mx-3">{product.quantity}</strong>
                  <button onClick={() => product.quantity > 1 ? dispatch(Actions.decrementQty(product.id)) : dispatch(Actions.deleteFromCart(product.id))}  className="btnz shadow">-</button>
                </div>
                  <button onClick={() => dispatch(Actions.deleteFromCart(product.id))} className="btn">Remove</button>
                <div className="col-lg-1 price text-center ">{product.price}</div>
              </div>
            )
          })}


        </div>


        <div className="col  d-flex flex-column checkout">
          <div className="row border m-1 p-2">
            <div className="col-8 d-flex flex-column">
              <strong class="mb-3">Subtotal</strong>
              <strong>Total Including Shipping</strong>
            </div>
            <div className="col-4 d-flex flex-column">
              <strong className="mb-3">{subtotal}$</strong>
              <strong>{subtotal < 100 ? total : 19.99}$</strong>
            </div>
          </div>
          <button className="btn btn-dark mt-4">CHECKOUT</button>
        </div>
      </div>

    </>
  )
}

export default ShopCart