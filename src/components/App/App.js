import React, { useEffect, useState } from 'react';
import Example from "../ExampleClassComponent/ExampleFunctionComponent";
import ExampleClass from "../ExampleClassComponent/ExampleClassComponent";
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem'
import AlignItemsList from './chat';
const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});
function Message(props) {
    return <p key='id'>{props.author}: {props.text}</p>
}
function App() {
    const chats = [{ id: 'aezakmi', name: 'nina' }, { id: 'kjkszpj', name: 'tata' }]
    const [inputValue, setInputValue] = React.useState(``)
    const [messageList, setMessageList] = React.useState([])
    const AUTHOR = {
        ME: 'Me',
        BOT: 'Bot'
    }
    const inputValueChange = (e) => {
        setInputValue(e.target.value)
    }
    React.useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHOR.BOT) {
            setTimeout(() => {
                setMessageList((currentmessagelist) =>
                    [...currentmessagelist,
                    { text: 'text', author: AUTHOR.BOT }
                    ])
            }, 1000)
        }
    }, [messageList])

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessageList((currentmessagelist) =>
            [...currentmessagelist,
            { text: inputValue, author: `Me` }
            ])
        setInputValue(``)
    }
    return <div className='app'>
        <div className="chat__members">
            <div><AlignItemsList /></div>
            <div className="chat">
                {messageList.map((message, index) => {
                    return <Message author={message.author} text={message.text} />
                })}
            </div>
        </div>

        <form className="email" onSubmit={handleSubmit}>
            {/* <input
                className="input"
                value={inputValue}
                onChange={inputValueChange}
                placeholder='Text here'
            >
            </input> */}
            <TextField
                // id="outlined-helperText"+
                className="input"
                value={inputValue}
                onChange={inputValueChange}
                label="Helper text"
                autoFocus
                required
                defaultValue="Subscribe"
                helperText="Some important text"
                variant="outlined"
            />

            {/* <input type="submit" className="button">
            </input>             */}
                <Button variant="contained" onClick={handleSubmit} className="button" color="primary">
                    Primary
                </Button>

        </form>


    </div>


}

export default App;
