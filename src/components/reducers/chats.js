import { ADD__CHAT, REMOVE__CHAT } from "../actions/chat"

const initialState = {}

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD__CHAT: {
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        }
        case REMOVE__CHAT: {
            delete state[action.payload.chatId]

            return { ...state }
        }


        default: return state
    }
}