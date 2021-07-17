import React, { useEffect, useState } from 'react';
import Example from "../ExampleClassComponent/ExampleFunctionComponent";
import ExampleClass from "../ExampleClassComponent/ExampleClassComponent";
import './App.css';

function Message(props) {
    return <p>{props.author}: {props.text}</p>
}
function App() {

    const [inputValue, setInputValue] = React.useState(``)
    const [messageList, setMessageList] = React.useState([])
    React.useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHOR.BOT) {
            setTimeout(() => {
                setMessageList((currentMessageList) => [
                    ...currentMessageList,
                    { text: `Sent`, author: AUTHOR.BOT }
                ])
            }, 1000)
        }
    }, [messageList])
    const AUTHOR = {
        ME: `Me`,
        BOT: `Bot`
    }

    // const handleMessage = () => <p>{messageList}</p>
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { text: inputValue, author: AUTHOR.ME }
        ])
        setInputValue(``)
    }
    const inputValueChange = (e) => {
        setInputValue(e.target.value)
    }



    return (
        <div className="app">
            {messageList.map((message, index) => (
                <Message key={index} author={message.author} text={message.text} />
            ))}
            <form className="email" onSubmit={handleSubmit}>
                <input
                    className="input"
                    onChange={inputValueChange}
                    value={inputValue}
                    placeholder="Enter Message">
                </input>
                <input type="submit" className="button">
                </input>

            </form>


        </div>
    )
}

export default App;