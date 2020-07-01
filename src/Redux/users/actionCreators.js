import { FETCH_USER } from './actionTypes'
import { ADD_USER } from './actionTypes';
export const fetchUser = (payload) => {

    return {
        type: FETCH_USER,
        payload
    }
}

export const addUser = (payload) => {

    return {
        type: ADD_USER,
        payload
    }
}