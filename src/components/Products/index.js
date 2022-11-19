import React, { useEffect, useState } from 'react'

import s from './products.module.css'

import items from '../../data/items.json'

import ReactPaginate from 'react-paginate';
import sendRequest from '../../service';

import { addCart, getDataFromFakeApi } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Products(){
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cartItems.productItems)
    const filters = useSelector((state) => state.filters)

    const [chip,setChip] = useState(['mug'])
    const [currentItems,setCurrentItems] = useState([])
    const [pageCount,setPageCount] = useState(0)
    const [itemOffset,setItemOffset] = useState(0)

    const [triggerSort,setTriggerSort] = useState(false)
    
    const [items,setItems] = useState([])
    const [filteredItems,setFilteredItems] = useState([])
    
    const itemsPerPage = 16


    useEffect(() => {
        dispatch(getDataFromFakeApi())
    },[])

    useEffect(() => {
        let temp = [...items]

        if(chip.length !== 2){

            if(chip.includes('mug')){
                temp = temp.filter((item) => item.itemType === 'mug')
            }

            if(chip.includes('shirt')){
                temp = temp.filter((item) => item.itemType === 'shirt')

            }
        }


        if(filters.sort === 'lth'){
            temp = temp.sort((a,b) => a.price - b.price)
        }

        if(filters.sort === 'htl'){
            temp = temp.sort((a,b) => b.price - a.price)
        }

        if(filters.sort === 'nto'){
            temp = temp.sort((a,b) => b.added - a.added)
        }

        if(filters.sort === 'otn'){
            temp = temp.sort((a,b) => a.added - b.added)
        }

        if(!filters.brands.includes('all')){
            temp = temp.filter((item) => filters.brands.includes(item.manufacturer))
        }

        if(!filters.tags.includes('all')){
            temp = temp.filter((item) => filters.tags.some((s) => item.tags.includes(s)))
        }

        setFilteredItems(temp)

    },[filters,chip,items])








    useEffect(() => {
        setItems(products)
        setFilteredItems(products)
    },[products])


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filteredItems?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredItems?.length / itemsPerPage));

    },[itemOffset,itemsPerPage,items,filteredItems])



    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
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

    const addItem = (item) => {
        dispatch(addCart(item))
    }


    return(
        <div className={s.productsContainer}>
            <p>Products</p>
            <div className={s.chipContainer}>
                <div  className={`${s.chip} ${chip.includes('mug') && s.active}`} onClick={() => {handleClick('mug')}}>mug</div>
                <div className={`${s.chip} ${chip.includes('shirt') && s.active}`} onClick={() => {handleClick('shirt')}}>shirt</div>
            </div>
            <div className={s.itemContainer}>
                {
                    currentItems.length > 0 ?
                    currentItems?.map((item) => {
                    return(
                        <div className={s.card} key={item.added}>
                            <div className={s.img}></div>
                            <label className={s.price}>₺ {item.price}</label>
                            <p className={s.title}>{item.name}</p>
                            <button className={s.addBtn} onClick={() => {addItem(item)}}>Add</button>
                        </div>
                    )
                })
                :
                <div>No Available Data</div>
                }
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
                    nextClassName={s.next}
                    activeLinkClassName={s.activePage}
                    disabledLinkClassName={s.disabledLink}
                />
            </div>  
        </div>
    )
}

