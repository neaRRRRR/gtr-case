import sendRequest from "../../service";

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART' ;
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const SET_SORT = 'SET_SORT'
export const SET_BRANDS = 'SET_BRANDS'
export const SET_TAGS = 'SET_TAGS'




export const getDataFromFakeApi = () => {

    return (dispatch) => {
        return sendRequest.get('items').then((data) => {
            let temp = data.sort((a,b) => a.price - b.price)
            dispatch(getAllProduct(temp))
        })
        .catch(err => console.log(err))
    }
    
    
}


export function getAllProduct(payload){
    return{
        type:'GET_ALL_PRODUCT',
        payload
    }
}


export function getNumberCart(){
    return{
        type:'GET_NUMBER_CART'
    }
}

export function addCart(payload){
    return {
        type:'ADD_CART',
        payload
    }
}
export function updateCart(payload){
    return {
        type:'UPDATE_CART',
        payload
    }
}
export function deleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}

export function increaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}
export function decreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}

export function setSort(payload){
    return{
        type:'SET_SORT',
        payload
    }
}

export function setBrands(payload){
    return{
        type:'SET_BRANDS',
        payload
    }
}

export function setTags(payload){
    return{
        type:'SET_TAGS',
        payload
    }
}