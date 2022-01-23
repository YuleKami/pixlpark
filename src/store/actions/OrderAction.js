import * as types from '../types'
import {getReqToken} from "../../api";

const getRequestToken = () => ({type: types.GET_REQUEST_TOKEN})
const getRequestTokenErr = () => ({type: types.GET_REQUEST_TOKEN_ERROR})

export const getRToken = () => async (dispatch) => {
    try {
        dispatch(getRequestToken())
        const data = await getReqToken()
        console.log(data)
    } catch (err) {
        dispatch(getRequestTokenErr())
    }
}