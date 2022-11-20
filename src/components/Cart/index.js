import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartTotal, decreaseQuantity, deleteCart, increaseQuantity } from '../../redux/actions'
import Add from '../svg/Add'
import Minus from '../svg/Minus'

import s from './cart.module.css'


export default function Cart(){

    const cart = useSelector((state) => state.cartItems)
    const cartCount = useSelector((state) => state.cartItems.numberCart)
    const displayCart = useSelector((state) => state.toggle)
    const [sum,setSum] = useState(0)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(cart)
        let sum = cart.Carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
          }, 0);
        setSum(sum)
    },[cart])

    useEffect(() => {
        dispatch(cartTotal(sum))
    },[sum])

    const increaseQ = (item) => {
        dispatch(increaseQuantity(item))

    }

    const decreaseQ = (item) => {
        if(item.quantity === 1){
            dispatch(deleteCart(item))
        }
        else{
            dispatch(decreaseQuantity(item))
        }

    }

    return(
        <>
        {
            cartCount > 0 ?
                <div className={s.cartContainer} style={displayCart.toggleStatus ? {display:'block'} : {display:'none'}}>
                <div className={s.contentContainer}>
                {cart.Carts.map((item) => {
                    return(
                        <div className={s.itemContainer}>
                            <div className={s.content}>
                                <div className={s.info}>
                                    <p>{item.name}</p>
                                    <label>₺{item.price}</label>
                                </div>
                                <div className={s.count}>
                                    <div id={s.minus} className={s.svg} onClick={() => {decreaseQ(item)}}><Minus /></div>
                                    <div className={s.itemCount}>{item.quantity}</div>
                                    <div id={s.add} className={s.svg} onClick={() => {increaseQ(item)}}><Add /></div>
                                </div>
                            </div> 
                        </div>
                    )
                })}
                    
                    
                    <div className={s.totalContainer}>
                        ₺{sum.toFixed(2)}
                    </div>
                </div>
            </div>
            :
            <div className={s.cartContainer} style={displayCart.toggleStatus ? {display:'block'} : {display:'none'}}>
                <div className={s.contentContainer}>
                    <div className={s.itemContainer}>
                        <div className={s.content}>
                            <div className={s.info}>
                                <p>Cart is empty</p>
                                <label>-</label>
                            </div>
                            <div className={s.count}>
                                <div id={s.minus} className={s.svg}><Minus /></div>
                                <div className={s.itemCount}>-</div>
                                <div id={s.add} className={s.svg}><Add /></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        }
        </>
    )
}