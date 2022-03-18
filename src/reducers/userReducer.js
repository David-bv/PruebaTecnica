import { typesUsers } from "../types/types"


const initialState = {
    users: []
}

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesUsers.create:
            return {
                users: [action.payload]
            }
        case typesUsers.edit:
            return {
                ...state
            }
        case typesUsers.delete:
            return {
                users: state.users.filter(p => p.numberId !== action.payload)
            }
        case typesUsers.list:
            return {
                users: [...action.payload]
            }
        case typesUsers.search:
            return {
                users:  action.payload
            }
        default:
            return state;
    }
}