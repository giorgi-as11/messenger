import React, { useEffect, useState } from 'react';
import Router from '../../router/router'
import './App.css';
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { chageIsAuthed } from '../actions/profile'
import { Button } from '@material-ui/core';
function App() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(`authed User`, { user })

            dispatch(chageIsAuthed(!!user))
        })

    }, [])

    const handleSignOut = () => {
        firebase.auth().signOut()
    }
    return (
        <div className="app">
            <div
                style={{
                    display: 'flex',
                    flexDirection: "row",
                    gap: '20px',
                    justifyContent: 'spaceAround',
                    alignItems: 'center'
                }}
                className="bordered"
            >
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/news">News</Link>
                <Link to="/login">Login</Link>
                <Button style={{ color: 'white' }} onClick={handleSignOut}>Sign Out</Button>
            </div>
            <Router />
        </div>
    )
}


export default App;
