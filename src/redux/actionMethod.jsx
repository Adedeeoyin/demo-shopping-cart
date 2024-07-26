import { DECREMENT, INCREMENT, UPDATE_PICK } from "./actionType";

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

export function UpdatePick() {
  return {
    type: UPDATE_PICK,
    payload: null
  }
}