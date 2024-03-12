import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'


const CartItems = () => {
  const {all_product,cartItems,removeToCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=> {
        if(cartItems[e.id] > 0){
          return <div>
          <div className="cartitems-format">
            <img src={e.image} alt=""  className='cartitems-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
          </div>
        </div>
        }
      })}
    </div>
  )
}

export default CartItems
