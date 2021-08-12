import React, { useEffect, useState } from 'react';
import Router from '../../router/router'
import './App.css';
import { Link } from 'react-router-dom'

function App() {
    // const chats = [{ id: 'aezakmi', name: 'nina' }, { id: 'kjkszpj', name: 'tata' }]
    const [chats, setChats] = React.useState([
        {
            id: "chat1", name: "chat1"
        },
        {
            id: "chat2", name: "chat2"
        }, {
            id: "chat3", name: "chat3"
        }, {
            id: "chat4", name: "chat4"
        }
    ])

    const [currentChat, setCurrentChat] = React.useState(chats[0])

    // const handleAddChat = (chatName) => {
    //     setChats((currentChats) => [
    //         ...currentChats,
    //         { name: chatName, id: `chat${Date.now()}` },
    //     ])
    // }

    const handleRemoveChat = (chatId) => {
        setChats((currentChats) =>
            currentChats.filter((chat) => chat.id !== chatId)
        )
    }

    // const handleIsChatExists = React.useCallback(
    //     (chatId) => {
    //         return Boolean(chats.find((chat) => chat.id === chatId))
    //     },
    //     [chats]
    // )

    const handleChangeChat = (chat) => setCurrentChat(chat)

    // const handleIsChatExist = React.useCallback((chatId) => {
    //     return Boolean(messageList.find(chat => chat.id === chatId))
    // }, [messageList])
    // // const dispatch = useDispatch()
    // const { name, age } = useSelector(state => state.profile)
    // const handleNameSubmit = (e, newName) => {
    //     // e.preventDefault()
    //     console.log('action with', newName)
    //     dispatch(changeName(newName))
    // }

    return (
        <div className="app">

            <Router
                chats={chats}
                currentChat={currentChat}
                onCurrentChatChange={handleChangeChat}
                // onAddChat={handleAddChat}
                onRemoveChat={handleRemoveChat}
            />
        </div>
    )
}


export default App;
