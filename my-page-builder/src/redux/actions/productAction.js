import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    // console.log(products)
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}

export const removeProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}