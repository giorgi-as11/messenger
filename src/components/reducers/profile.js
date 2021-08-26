import { CHANGE__IS__AUTHED, CHANGE__NAME, CHANGE__IS__ONLINE } from "../actions/profile"

const initialState = {
    isOnline: true,
    name: 'giorgi',
    age: 25,
    isAuthed: false
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE__NAME: {
            return {
                ...state,
                name: action.payload.name,
                // showName = !state.showName
            }
        }
        case CHANGE__IS__ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline
            }
        }
        case CHANGE__IS__AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.IsAuthed
            }
        }
        default:
            return state
    }
}