
import { AUTHORS } from "../constants/constants";

import firebase from "firebase";

export const ADD__MESSAGE = 'MESSAGES::ADD__MESSAGE'



export const addMessage = (message, chatId) => ({
    type: ADD__MESSAGE,
    payload: {
        message,
        chatId
    }
})

export const addMessageThunk = (message, chatId) => (dispatch, getState) => {
    firebase
        .database()
        .ref(`messages`)
        .child(chatId)
        .push(message)
    const botMessage = { author: AUTHORS.BOT, text: `I'm the Bot`, id: `message/${Date.now()}` }
    let timer = setTimeout(() => {
        firebase
            .database()
            .ref(`messages`)
            .child(chatId)
            .push(botMessage)
        clearTimeout(timer)
    }, 1500)

}
export const handleMessagesOnChange = (chatId) => (dispatch) => {
    firebase
        .database()
        .ref('messages')
        .child(chatId)
        .on('child_added', (dataSnapShot) => {
            console.log(`child added`, dataSnapShot.val())
            dispatch(addMessage(dataSnapShot.val(), chatId))
        })
    firebase
        .database()
        .ref('messages')
        .child(chatId)
        .on('child_changed', (dataSnapShot) => {
            console.log(`child changed`, dataSnapShot.val())
            dispatch(addMessage(dataSnapShot.val(), chatId))
        })
}