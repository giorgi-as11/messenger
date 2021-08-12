// import React from "react"
// import { Switch, Route } from "react-router"
// import { Link } from "react-router-dom"
// import "../components/App/App.css"
// import App from '../components/App/App';
// // import AlignAlisChat from "../components/App/chats/chatAli";
// import AlisApp from "../components/App/chats/AliApp";
// import Profile from "../react__5/profile/profileComponent";
// import chat from "../react__5/chat/chat";
// export default function router() {
//     return <div>
//         <div className="bordered row">
//             <Link className="Link" to="/chats">chats</Link>
//             <Link to="/profile" className="Link">profile</Link>
//         </div>
//         <Switch>
//             <Route path="/chats/Ali" >
//                 <div className="bordered">
//                     <AlisApp />
//                 </div>
//             </Route>
//             <Route path="/chats/:chatId">
//                 <p>chatId</p>
//                 <Chat />
//             </Route>
//             <Route path="/chats">
//                 <p>chat</p>
//                 <App />
//             </Route>
//             <Route path="/chats/oleg">
//                 <p>oleg</p>
//             </Route>
//             <Route path="/profile">
//                 <Profile />
//             </Route>
//             <Route>
//                 <App />
//             </Route>
//         </Switch>
//     </div>
// }



import React from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import '../components/App/App.css'
import Chat from '../components/chat/chat'
import Profile from '../components/profile/profileComponent'
import Home from '../components/Home/Home'
import Chats from '../components/chats/chats'

export default function Router(props) {
    return (
        <div>
            <div className="bordered">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
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
                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}