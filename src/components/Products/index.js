import React, { useState } from 'react'

import s from './products.module.css'


export default function Products(){
    const [chip,setChip] = useState(['mug'])

    const handleClick = (tag) => {
        if(chip.includes(tag)){
            let temp = chip.filter((item) => item !== tag)
            setChip(temp)
        }
        else{
            setChip([...chip,tag])
        }
    }

    return(
        <div className={s.productsContainer}>
            <p>Products</p>
            <div className={s.chipContainer}>
                <div  className={`${s.chip} ${chip.includes('mug') && s.active}`} onClick={() => {handleClick('mug')}}>mug</div>
                <div className={`${s.chip} ${chip.includes('shirt') && s.active}`} onClick={() => {handleClick('shirt')}}>shirt</div>
            </div>
        </div>
    )
}