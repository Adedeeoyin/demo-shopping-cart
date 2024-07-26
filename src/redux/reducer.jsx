import { DECREMENT, INCREMENT, UPDATE_PICK } from "./actionType";
import image1 from '../assets/plant1.jpg'
import image2 from '../assets/plant2.jpg'
import image3 from '../assets/plant3.jpg'
import image4 from '../assets/plant4.jpg'
import image5 from '../assets/plant5.jpg'
import image6 from '../assets/plant6.jpg'

const initialState ={
    cart: [],
    products: [
        {name: 'plant-1', id:111, amount: 1000, src: image1},
        {name: 'plant-2', id:222, amount: 2000, src: image2},
        {name: 'plant-3', id:333, amount: 3000, src: image3},
        {name: 'plant-4', id:444, amount: 4000, src: image4},
        {name: 'plant-5', id:555, amount: 5000, src: image5},
        {name: 'plant-6', id:666, amount: 6000, src: image6},
      ],
    pick: 111
}
export default function Reducer(state = initialState, action) {
    switch(action.type){
        case INCREMENT:return({...state, cart: [...state.cart, action.payload]});
        case DECREMENT:
             {const index = state.cart.findIndex((item)=> item === action.payload);
                const newCart = [...state.cart]
            if (index !== -1)newCart.splice(index, 1)  
            return {...state, cart: newCart};}
        case UPDATE_PICK:return ({...state, pick: action.payload})
        default: return state
    }
  
}
