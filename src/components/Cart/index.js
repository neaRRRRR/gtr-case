import React from 'react'
import Add from '../svg/Add'
import Minus from '../svg/Minus'

import s from './cart.module.css'


export default function Cart(){

    return(
        <div className={s.cartContainer}>
            <div className={s.contentContainer}>
                <div className={s.itemContainer}>
                    <div className={s.content}>
                        <div className={s.info}>
                            <p>Example Product</p>
                            <label>₺14,99</label>
                        </div>
                        <div className={s.count}>
                            <div id={s.minus} className={s.svg}><Minus /></div>
                            <div className={s.itemCount}>1</div>
                            <div id={s.add} className={s.svg}><Add /></div>
                        </div>
                    </div> 
                </div>
                <div className={s.totalContainer}>
                    ₺39,97
                </div>
            </div>
        </div>
    )
}