import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleDisplay } from '../../redux/actions';
import CartIcon from '../svg/CartIcon';


import s from './header.module.css'

export default function Header(){

    const dispatch = useDispatch()
    const cartTotal = useSelector((state) => state.cartItems.cartTotal)
    const [toggle,setToggle] = useState(false)

    useEffect(() => {
        dispatch(setToggleDisplay(toggle))
        if(window.innerWidth > 1000){   
            dispatch(setToggleDisplay(true))
        }
    },[toggle])

    window.addEventListener("resize", function () {
        if(window.innerWidth > 1000){   
            dispatch(setToggleDisplay(true))
        }
    });

    return(
        <header>
                <div className={s.logo}></div>
                <div className={s.cart} onClick={() => {setToggle(!toggle)}}>
                    <CartIcon />
                    <span>₺ {cartTotal.toFixed(2)}</span>
                </div>
        </header>
    )
} 