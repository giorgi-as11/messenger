import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import Input from '../Input/Input'
import usePrevious from '../../hooks/usePrevious'
import { AUTHORS } from '../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, addMessageThunk } from '../actions/messages'
import { useIsChatExists } from '../../hooks/useIsChatExists'
import firebase from 'firebase'
const Chat = (props) => {

    const { chatId } = useParams()

    const messageList = useSelector(state => state.messages[chatId] || [])
    // const [messageList, setMessageList] = React.useState([])
    const dispatch = useDispatch()
    
    React.useEffect(() => {

        firebase.database().ref('messages').child(chatId).get().then((snapShot) => {
            console.log(snapShot)
        })
    }, [])

    const handleMessageSubmit = (newMessageText) => {

        dispatch(addMessageThunk({
            author: AUTHORS.ME,
            text: newMessageText,
            id: `message/${Date.now()}`
        },
            chatId
        ))
        console.log({
            author: AUTHORS.ME,
            text: newMessageText,
            id: `message/${Date.now()}`
        })
        firebase
            .database()
            .ref(`messages`)
            .child(chatId)
            .push({
                author: AUTHORS.ME,
                text: newMessageText,
                id: `message/${Date.now()}`
            })


    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message) => (
                        <Message
                            key={message.id}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={handleMessageSubmit} />
        </div>
    )

}

export default Chat