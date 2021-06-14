import { ActionTypes } from "../constants/action-types";

const initState = {
    products: [{
        id: 1,
        title: 'Dipesh',
        category: "programmer"
    }]
}

export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state;
        default:
            return state;
    }
}