import { SET_ERROR_STATUS, SET_IDLE_STATUS, SET_LOADING_STATUS, SET_NEWS_LIST } from "../actions/new"

const NEWS__STATUS = {
    loading: 'loading',
    error: 'error',
    idle: 'idle'
}

const initialState = {
    list: [],
    status: NEWS__STATUS.idle
}

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR_STATUS:
            return {
                ...state,
                status: NEWS__STATUS.error,
            }
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: NEWS__STATUS.idle,
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                status: NEWS__STATUS.loading,
            }
        case SET_NEWS_LIST: {
            return {
                ...state,
                list: action.payload.newsList
            }
        }
        default:
            return state

    }
}