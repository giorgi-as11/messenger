import React, { useState } from 'react';
import Example from "../ExampleClassComponent/ExampleFunctionComponent";
import ExampleClass from "../ExampleClassComponent/ExampleClassComponent";
import './App.css';

function App() {
    const [showChild, setShowChild] = React.useState(true)
    const messages = ['1', '2', '3', '4']
    const [messageList, setMessageList] = React.useState([])
    const handleToggleShowChild = () => {
        setShowChild(!showChild)
    }
    const handleMessageList = () => <p>there is {messageList}</p>


    // Рендер с использованием фрагментов
    // return (

        
    return (
        <div className="app">
            <div className="app__content">
                <button onClick={handleToggleShowChild}>Toggle showChild</button>
                {/* Условный рендер */}
                {showChild ? <Example text="Welcome!" /> : null}
                {showChild && <ExampleClass text="Welcome!" />}
                <input className="bordered" placeholder="Инпут для примера" onChange={e => console.log(e)} />
                <form className="email" /*onSubmit={handleMessageList}*/>
                    <input type="text" className="input" onChange={e => setMessageList(e.target.value)} placeholder="Enter Your Email"></input>
                    <button value="Subscribe" onClick={handleMessageList} className="button">
                    </button>

                </form>
                {/* messageList.map((message) => <div>{message}</div>) */}
                
                {/* {console.log(messageList)} */}
            </div>
        </div>
    );
}

export default App;