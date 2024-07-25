import { DECREMENT, INCREMENT } from "./actionType";

export function Increment() {
  return {
    type: INCREMENT,
    payload: null
  }
}

export function Decrement() {
  return {
    type: DECREMENT,
    payload: null
  }
}
