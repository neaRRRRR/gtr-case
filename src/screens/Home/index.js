import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Filters from '../../components/Filters';
import Header from '../../components/Header';
import Products from '../../components/Products';

import s from './home.module.css'

export default function Home(){

    const [items,setItems] = useState([])


    return(
        <>
            <Header />
            <main>
                <section style={{flex:1}}><Filters /></section>
                <section style={{flex:2.2}}><Products /></section>
                <section id={s.cart} style={{flex:1}}><Cart /></section>
            </main>
            <footer id={s.footer}>
                <span>©2019 Market</span>
                <span>•</span>
                <span>Privacy Policy</span>
            </footer>
        </>
    )
}