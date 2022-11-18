import React, { useEffect, useState } from 'react'

import s from './products.module.css'

import items from '../../data/items.json'

import ReactPaginate from 'react-paginate';


export default function Products(){
    const [chip,setChip] = useState(['mug'])
    const [currentItems,setCurrentItems] = useState(null)
    const [pageCount,setPageCount] = useState(0)
    const [itemOffset,setItemOffset] = useState(0)
    const itemsPerPage = 16
    const [item,setItem] = useState(['a','b','c','d','e','f','g','h','j','k'])

    useEffect(() => {
        console.log(items)
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));

    },[itemOffset,itemsPerPage,items])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };

    const handleClick = (tag) => {
        if(chip.includes(tag)){
            let temp = chip.filter((item) => item !== tag)
            setChip(temp)
        }
        else{
            setChip([...chip,tag])
        }
    }

    const PrevLabel = () => {
        return(
            <>
                <img src={require('../../assets/arrow-left.png')}/>
                <span>Prev</span>
            </>
        )
    }

    return(
        <div className={s.productsContainer}>
            <p>Products</p>
            <div className={s.chipContainer}>
                <div  className={`${s.chip} ${chip.includes('mug') && s.active}`} onClick={() => {handleClick('mug')}}>mug</div>
                <div className={`${s.chip} ${chip.includes('shirt') && s.active}`} onClick={() => {handleClick('shirt')}}>shirt</div>
            </div>
            <div className={s.itemContainer}>
                {currentItems?.map((item) => {
                    return(
                        <div className={s.card}>
                            <div className={s.img}></div>
                            <label className={s.price}>₺ {item.price}</label>
                            <p className={s.title}>{item.name}</p>
                            <button className={s.addBtn}>Add</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={'Prev'}
                    breakClassName={s.break}
                    renderOnZeroPageCount={null}
                    containerClassName={s.pagination}
                    pageLinkClassName={s.pageNum}
                    previousLinkClassName={s.previousLink}
                    nextLinkClassName={s.nextLink}
                    activeLinkClassName={s.activePage}
                    disabledLinkClassName={s.disabled}
                />
            </div>  
        </div>
    )
}

