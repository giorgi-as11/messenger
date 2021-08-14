

import React from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import '../components/App/App.css'
import Chat from '../components/chat/chat'
import Profile from '../components/profile/profileComponent'
import Home from '../components/Home/Home'
import Chats from '../components/chats/chats'
import { News } from '../components/news/news'

export default function Router(props) {
    return (
        <div>
            <div className="bordered">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/news">News</Link>
            </div>

            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <Home
                            chats={props.chats}
                            currentChat={props.currentChat}
                            onCurrentChatChange={props.onCurrentChatChange}
                        />
                    )}
                />
                <Route
                    exact
                    path="/chats"
                    render={() => (
                        <Chats
                            chats={props.chats}
                            currentChat={props.currentChat}
                            onCurrentChatChange={props.onCurrentChatChange}
                            getIsChatExists={props.getIsChatExists}
                            onAddChat={props.onAddChat}
                            onRemoveChat={props.onRemoveChat}
                        />
                    )}
                />
                <Route
                    path="/chats/:chatId"
                    render={() => {
                        return <Chat getIsChatExists={props.getIsChatExists} />
                    }}
                />
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path='/news' component={News} />

                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>
    )
}