import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartIcon from '../svg/CartIcon';


import s from './header.module.css'

export default function Header(){

    const cartTotal = useSelector((state) => state.cartItems.cartTotal)


    return(
        <header>
                <div className={s.logo}></div>
                <div className={s.cart}>
                    <CartIcon />
                    <span>₺ {cartTotal.toFixed(2)}</span>
                </div>
        </header>
    )
} 