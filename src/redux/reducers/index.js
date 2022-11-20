import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART, CART_TOTAL, SET_SORT, SET_BRANDS, SET_TAGS, SET_TOGGLE_CART} from  '../actions';

const initItem = {
    numberCart:0,
    Carts:[],
    productItems:[],
    cartTotal:0,
}

const initFilter = {
    sort: 'lth',
    brands: ['all'],
    tags: ['all'],
} 

const initCart = {
    toggleStatus:false
}

function cart(state = initItem,action){
    switch(action.type){
        case GET_ALL_PRODUCT: 
            return{
                ...state,
                productItems:action.payload
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.slug,
                    quantity:1,
                    name:action.payload.name,
                    price:action.payload.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id == action.payload.slug){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.slug,
                        quantity:1,
                        name:action.payload.name,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            let indexQ = state.Carts.findIndex((item) => item.id === action.payload.id)
            state.Carts[indexQ].quantity++

            return{
                ...state
            }
        case DECREASE_QUANTITY:
            let indexD = state.Carts.findIndex((item) => item.id === action.payload.id)
            let quantity = state.Carts[indexD].quantity

            if(quantity>1){
                state.numberCart--;
                state.Carts[indexD].quantity--
            }
            
            return{
                ...state
            }
        case DELETE_CART:
            let indexDel = state.Carts.findIndex((item) => item.id === action.payload.id)
            let quantity_ = state.Carts[indexDel].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id!=state.Carts[indexDel].id
                })
                
            }

        case CART_TOTAL:
            return{
                ...state,
                cartTotal:action.payload
            }
        default:
            return state;
    }
}


function sort(state = initFilter,action){
    switch(action.type){
        case SET_SORT: 
            return{
                ...state,
                sort:action.payload
            }
        case SET_BRANDS:
            return{
                ...state,
                brands:action.payload
            }
        case SET_TAGS:
            return{
                ...state,
                tags:action.payload
            }

        default:
            return state;
    }

}

function toggleCart(state = initCart,action){
    switch(action.type){
        case SET_TOGGLE_CART: 
            return{
                toggleStatus:action.payload
            }
        
        default:
            return state;
        }
}


const Cart = combineReducers({
    cartItems:cart,
    filters:sort,
    toggle:toggleCart,
});

export default Cart;