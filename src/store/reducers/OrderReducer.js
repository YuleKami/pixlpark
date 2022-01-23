import * as types from '../types'

const initState = {
    error: undefined,
    user: undefined,
    orders: undefined,
}

const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_REQUEST_TOKEN:
            return {...state, error: undefined}
        case types.GET_REQUEST_TOKEN_ERROR:
            return {...state, error: true}
        case types.GET_ACCESS_TOKEN:
            return {...state, error: undefined}
        case types.GET_ACCESS_TOKEN_ERROR:
            return {...state, error: true}
        case types.GET_REFRESH_TOKEN:
            return {...state, error: undefined}
        case types.GET_REFRESH_TOKEN_ERROR:
            return {...state, error: true}
        case types.ORDERS_REQUEST:
            return {...state, orders: action.payload, error: undefined}
        case types.ORDERS_REQUEST_ERROR:
            return {...state, error: true}
        case types.UNAUTHORIZE:
            return {...state, error: undefined}
        default:
            return state
    }
}

export default OrderReducer