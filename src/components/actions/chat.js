import firebase from "firebase"
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

export const addChatToDB = (name, chatId) => {
    return () => {
        firebase.database().ref("chats").child(chatId).push({ id: chatId, name })
    }
}

export const removeChatFromDB = (chatId) => {
    return async (dispatch) => {
        await firebase.database().ref(`chats`).child(chatId).remove()

        dispatch(removeChat(chatId))
    }
}

export const modificationChatFirebase = () => (dispatch, getState) => {
    firebase
        .database()
        .ref('chats')
        .on("child_added", (snapshot) => {
            console.log(`child added`, snapshot.val())
            const { id: chatId, name } = Object.values(snapshot.val())[0]
            dispatch(addChat(name, chatId))
        })
    firebase
        .database()
        .ref('chats')

        .on("child_changed", (snapshot) => {
            const { id, name } = Object.values(snapshot.val())[0]
            dispatch(addChat(name, id))
        })
}