import { DECREMENT, INCREMENT } from "./actionType";

const initialState ={
    cart: [],
}
export default function Reducer(state = initialState, action) {
    switch(action.type){
        case INCREMENT:return({...state, cart: [...state.cart, action.payload]});
        case DECREMENT: {const index = state.cart.findIndex((item)=> item === action.payload);
         if (index !== -1){
          state.cart.splice(index, 1)  
         }  return {...state};}
        default: return state
    }
  
}
