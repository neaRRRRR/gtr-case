import React, { useState,useEffect } from 'react'
import CheckboxGroup from './CheckboxGroup'

import s from './filters.module.css'
import RadioGroup from './RadioGroup'

import companies from '../../data/companies.json'
import items from '../../data/items.json'

export default function Filters(){

    const [tags,setTags] = useState([])

    useEffect(() => {
        let temp = []
        items.map((data) => {
            data.tags.map((d) => temp.push(d))
        })
    setTags([...new Set(temp)])

    }, [])
    

    if(tags.length > 0){
        return(
            <div>
                <RadioGroup/>
                <CheckboxGroup title={'Brands'} data={companies}/>
                <CheckboxGroup title={'Tags'} data={tags}/>
            </div>
        )
    }
    else{
        return(
            <span>Loading...</span>
        )
    }
}