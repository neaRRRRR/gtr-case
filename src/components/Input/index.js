import React from 'react'

import s from './input.module.css'

export default function Input({
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder
  }) {

    return(
        <>
            <input
                id='filterInput'
                className={s.inputStyle}
                type="text" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        </>
    )

  }