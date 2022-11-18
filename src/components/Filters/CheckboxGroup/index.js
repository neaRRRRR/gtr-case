import React, { useEffect, useState } from 'react';
import Input from '../../Input';

import s from './cg.module.css'


let searchTimeout
export default function CheckboxGroup({title,data}){

    const [search,setSearch] = useState('')
    const [checked,setChecked] = useState(['all'])
    const [filteredData,setFilteredData] = useState(data)


    const handleCheck = (item) => {
        if(checked.includes(item)){
            let temp = checked.filter((x) => x !== item)
            setChecked(temp)
        }
        else{
            if(checked.includes('all')){
                setChecked([item])
                return;
            }
            setChecked([...checked,item])
        }
    }

    useEffect(() => {
        if(checked.length === 0){
            setChecked(['all'])
        }
    },[checked])

    useEffect(() => {
        if (!filteredData) return;
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
        handleSearch();
        }, 300);
    },[search])

    const handleSearch = () => {
        setFilteredData(
          data.filter((item) => {
            if(item.name){
                return (
                    item.name?.toLowerCase().includes(search.toLowerCase())
                  );
            }
            else{
                return (
                    item.toLowerCase().includes(search.toLowerCase())
                );
            }
            
          })
        );
      };

    return(
        <div style={{marginTop:24}}>
            <p className={s.title}>{title}</p>
            <div className={s.container}>
                <div style={{padding:'24px 24px 0'}}>   
                    <Input 
                        value={search}
                        onChange={setSearch}
                        placeholder={`Search ${title}`}
                    />
                </div>
                
                <div className={s.optionContainer}>
                    <div className={s.option}>
                        <input type="checkbox" name={'all'} value={'all'} checked={checked.includes('all')} onChange={() => {}}/>
                        <span className={s.checkmark} onClick={() => {setChecked(['all'])}}></span>
                        <label for="all">All</label>
                    </div>
                {
                    filteredData?.map((item) => {
                        return(
                            <div className={s.option}>
                                <input type="checkbox" name={item.slug || item} value={item.slug || item} checked={checked.includes(item.slug || item)} onChange={() => {}}/>
                                <span className={s.checkmark} onClick={() => {handleCheck(item.slug || item)}}></span>
                                <label for="all">{item?.name || item}</label>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}