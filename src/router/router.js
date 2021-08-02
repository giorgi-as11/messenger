import React from "react"
import { Switch, Route } from "react-router"
import { Link } from "react-router-dom"
import "../components/App/App.css"
import App from '../components/App/App';
// import AlignAlisChat from "../components/App/chats/chatAli";
import AlisApp from "../components/App/chats/AliApp";
import Profile from "../react__5/profile/profileComponent";
export default function router() {
    return <div>
        <div className="bordered row">
            <Link className="Link" to="/chats">chats</Link>
            <Link to="/profile" className="Link">profile</Link>
        </div>
        <Switch>
            <Route path="/chats/Ali" >
                <div className="bordered">
                    <AlisApp />
                </div>
            </Route>
            <Route path="/chats">
                <p>chat</p>
                <App />
            </Route>
            <Route path="/chats/oleg">
                <p>oleg</p>
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route>
                <App />
            </Route>
        </Switch>
    </div>
}