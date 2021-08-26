

import React from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import '../components/App/App.css'
import Chat from '../components/chat/chat'
import Profile from '../components/profile/profileComponent'
import Home from '../components/Home/Home'
import Chats from '../components/chats/chats'
import { News } from '../components/news/news'
import Login from '../components/Login/Login'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const isAuthed = useSelector(state => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router(props) {
    return (
        <div>


            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home} />
                <PrivateRoute
                    exact
                    path="/chats"
                    component={Chats}


                />
                <PrivateRoute
                    path="/chats/:chatId"
                    component={Chat}
                />
                <PrivateRoute
                    path="/profile"
                    component={Profile}

                />

                <Route path='/login' component={Login} />
                <Route
                    path='/news'
                    component={News}

                />

                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>
    )
}