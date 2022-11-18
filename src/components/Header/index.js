import React from 'react';

import s from './header.module.css'

export default function Header(){

    return(
        <header>
                <div className={s.logo}></div>
                <div className={s.cart}></div>
        </header>
    )
} 