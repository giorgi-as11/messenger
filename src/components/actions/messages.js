
import { AUTHORS } from "../constants/constants";


export const ADD__MESSAGE = 'MESSAGES::ADD__MESSAGE'



export const addMessage = (message, chatId) => ({
    type: ADD__MESSAGE,
    payload: {
        message,
        chatId
    }
})

export const addMessageThunk = (message, chatId) => (dispatch, getState) => {
    dispatch(addMessage(message, chatId));
    if (message.author !== AUTHORS.BOT) {
        const botMessage = { author: AUTHORS.BOT, text: `I'm the Bot`, id: `message/${Date.now()}` }
        setTimeout(() => dispatch(addMessage(botMessage, chatId)), 1500)
    }
}