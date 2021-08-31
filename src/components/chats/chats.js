import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import '../style.css'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import chatsReducer from '../reducers/chats'
import firebase from 'firebase'
import { addChat, removeChatFromDB, removeChat, addChatToDB, modificationChatFirebase } from '../actions/chat'
import chatsSelector from '../selectors/selectors'




export default function Chats(props) {
    const history = useHistory()
    const [nameState, setNameState] = React.useState()
    const [idState, setIdState] = React.useState()


    const chats = useSelector(state => state.chats)

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const dispatch = useDispatch()

    const handleRemoveChat = (chatId) => {
        dispatch(removeChatFromDB(chatId))
    }



    const handleAddChat = (name) => {
        let id = `chats ${Date.now()}`
        dispatch(addChatToDB(name, id))
    }
    React.useEffect(() => {
        dispatch(modificationChatFirebase())
    }, [])
    return (
        <div className="chats">
            <div className="chats__sidebar">
                <List className="app__sidebar" subheader={<p>Список чатов</p>}>
                    {Object.values(chats).map((chat) => (
                        <div key={chat.id} style={{ display: 'flex' }}>
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