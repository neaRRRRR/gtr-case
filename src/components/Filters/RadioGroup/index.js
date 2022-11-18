import React, { useState } from 'react';

import s from './rg.module.css'

export default function RadioGroup(){

    const [state,setState] = useState('lth')


    return(
        <div>
            <p className={s.title}>Sorting</p>
            <div className={s.optionContainer}>
                <div className={s.option}>
                    <input type="radio" id="lowToHigh" name="sort" value="lth" checked={state === 'lth'}/>
                    <span className={s.checkmark} onClick={() => {setState('lth')}}></span>
                    <label for="lowToHigh">Price low to high</label>
                </div>
                <div className={s.option}>
                    <input type="radio" id="highToLow" name="sort" value="htl" checked={state === 'htl'}/>
                    <span className={s.checkmark} onClick={() => {setState('htl')}}></span>
                    <label for="highToLow">Price high to low</label>
                </div>
                <div className={s.option}>
                    <input type="radio" id="newToOld" name="sort" value="nto" checked={state === 'nto'}/>
                    <span className={s.checkmark} onClick={() => {setState('nto')}}></span>
                    <label for="newToOld">New to old</label>
                </div>
                <div className={s.option}>
                    <input type="radio" id="oldToNew" name="sort" value="otn" checked={state === 'otn'}/>
                    <span className={s.checkmark} onClick={() => {setState('otn')}}></span>
                    <label for="oldToNew">Old to new</label>
                </div>
            </div>
        </div>
    )
}