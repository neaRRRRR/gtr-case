import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART, SET_SORT, SET_BRANDS, SET_TAGS} from  '../actions';

const initItem = {
    numberCart:0,
    Carts:[],
    productItems:[]
}

const initFilter = {
    sort: 'lth',
    brands: ['all'],
    tags: ['all'],
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
            state.Carts.push(cart);
            // if(state.numberCart==0){
            //     let cart = {
            //         id:action.payload.id,
            //         quantity:1,
            //         name:action.payload.name,
            //         image:action.payload.image,
            //         price:action.payload.price
            //     } 
            //     state.Carts.push(cart); 
            // }
            // else{
            //     let check = false;
            //     state.Carts.map((item,key)=>{
            //         if(item.id==action.payload.id){
            //             state.Carts[key].quantity++;
            //             check=true;
            //         }
            //     });
            //     if(!check){
            //         let _cart = {
            //             id:action.payload.id,
            //             quantity:1,
            //             name:action.payload.name,
            //             image:action.payload.image,
            //             price:action.payload.price
            //         }
            //         state.Carts.push(_cart);
            //     }
            // }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.payload].id
                    })
                   
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


const Cart = combineReducers({
    cartItems:cart,
    filters:sort
});
export default Cart;