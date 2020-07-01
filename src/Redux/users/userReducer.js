import { FETCH_USER } from './actionTypes';

import { ADD_USER } from './actionTypes';

const initialState = {
    users: [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' }
    ]
}
export function userReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_USER: {

            return {
                ...state,
                users: [...state.users, { id: 1, name: 'user3' }]
            }
        }
        case ADD_USER: {

            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        default:
            return state;

    }
}