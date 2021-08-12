import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import '../style.css'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import chatsReducer from '../reducers/chats'
import { addChat, removeChat } from '../actions/chat'
import chatsSelector from '../selectors/selectors'
export default function Chats(props) {
    const {
        // chats = [],
        currentChat,
        onCurrentChatChange,
        // onAddChat
        // onRemoveChat,
    } = props
    const history = useHistory()

    const chats = useSelector(state => state.chats)

    const handleChatLinkClick = (chat) => {
        onCurrentChatChange(chat)
        history.push(`/chats/${chat.id}`)
    }

    const dispatch = useDispatch()

    const handleRemoveChat = (chatId) => {
        dispatch(removeChat(chatId))
    }


    const handleAddChat = (name) => {

        dispatch(addChat(name, `chats ${Date.now()}`))

    }

    return (
        <div className="chats">
            <div className="chats__sidebar">
                <List className="app__sidebar" subheader={<p>Список чатов</p>}>
                    {Object.values(chats).map((chat) => (
                        <div style={{ display: 'flex' }}>
                            <ListItem
                                button
                                component="a"
                                key={chat.id}
                                onClick={() => handleChatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>
                            <Button onClick={() => handleRemoveChat(chat.id)}>
                                Удалить
                            </Button>
                        </div>
                    ))}
                </List>
            </div>

            <Input onSubmit={handleAddChat} />
        </div>
    )
}