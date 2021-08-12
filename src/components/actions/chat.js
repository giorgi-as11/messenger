export const ADD__CHAT = 'CHATS::ADD__CHAT'
export const REMOVE__CHAT = 'CHATS::REMOVE__CHAT'

export const addChat = (name, id) => ({
    type: ADD__CHAT,
    payload: {
        name,
        id
    }
})
export const removeChat = (chatId) => ({
    type: REMOVE__CHAT,
    payload: {
        chatId,
    },
})