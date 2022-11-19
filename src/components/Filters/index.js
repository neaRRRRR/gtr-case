import React, { useState,useEffect } from 'react'
import CheckboxGroup from './CheckboxGroup'

import s from './filters.module.css'
import RadioGroup from './RadioGroup'

// import companies from '../../data/companies.json'
import sendRequest from '../../service'
// import items from '../../data/items.json'

export default function Filters(){

    const [tags,setTags] = useState([])
    const [items,setItems] = useState([])
    const [companies,setCompanies] = useState([])

    useEffect(() => {
        getItems()
        getCompanies()
    }, [])

    useEffect(() => {
        if(items){
            let temp = []
            items.map((data) => 
                data?.tags.map((d) => temp.push(d))
            )
            setTags([...new Set(temp)])
        }
    },[items])
    
    const getItems = () => {
        sendRequest.get('items')
        .then((data) => {
            setItems(data)
        })
        .catch((err) => console.log(err))
    }

    const getCompanies = () => {
        sendRequest.get('companies')
        .then((data) => {
            setCompanies(data)
        })
        .catch((err) => console.log(err))
    }

    if(tags.length > 0 && companies.length > 0){
        return(
            <div>
                <RadioGroup/>
                <CheckboxGroup title={'Brands'} data={companies} type={'brands'}/>
                <CheckboxGroup title={'Tags'} data={tags} type={'tags'}/>
            </div>
        )
    }
    else{
        return(
            <span>Loading...</span>
        )
    }
}