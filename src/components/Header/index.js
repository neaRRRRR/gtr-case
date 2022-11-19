import React from 'react';
import CartIcon from '../svg/CartIcon';


import s from './header.module.css'

export default function Header(){

    return(
        <header>
                <div className={s.logo}></div>
                <div className={s.cart}>
                    <CartIcon />
                    <span>₺ 39,97</span>
                </div>
        </header>
    )
} 