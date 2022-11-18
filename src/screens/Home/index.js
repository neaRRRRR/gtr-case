import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Filters from '../../components/Filters';
import Header from '../../components/Header';
import Products from '../../components/Products';
import { getDataFromFakeApi } from '../../redux/actions';

import s from './home.module.css'

export default function Home(){
    const products = useSelector((state) => state.cartItems)
    const [items,setItems] = useState([])

    useEffect(() => {
        setItems(products.productItems)
    },[products])


    return(
        <>
            <Header />
            <main>
                <section><Filters /></section>
                <section><Products /></section>
                <section><Cart /></section>
            </main>
        </>
    )
}