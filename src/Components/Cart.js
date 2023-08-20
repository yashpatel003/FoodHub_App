import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'; 
import {clearCart} from '../utils/cartSlice';

const Cart = () => {
    const cartItem = useSelector((store)=>store.cart.items);
    console.log(cartItem);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
  return (
    <div>
        <button className='bg-red-300 p-2 m-5 rounded-md' onClick={()=> handleClearCart()}>Clear Cart</button>
        <div className='flex flex-wrap'>
        {cartItem.map(item => (<FoodItem key={item.id} {...item?.card?.info}/> ))}
        </div>
        <h1 className='font-bold text-2xl '>Cart Items - {cartItem.length}</h1>
    </div>
  )
}

export default Cart 