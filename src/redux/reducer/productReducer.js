import { actionTypes } from "./actionCreators/actionTypes";

const initialState = {
    cart: [],
}
export const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:{
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        case actionTypes.REMOVE_FROM_CART:{
            return {}
        }
        default: return state;
    }
}