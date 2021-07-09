import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css'
import { render } from 'react-dom';
const easy = "easy"
class Example extends React.Component{
  render(){
    return <h2 className='message'>message from new component first home work is {this.props.name}</h2>
  }
}

function Message(props) {
  return <h2 className='message'>message from new component first home work is {props.name}</h2>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='header__p'>
          რავა ეგრევე ცვლი შეჩემა
        </p>
        <Message name={easy}></Message>
        <Example name='not really hard'/>
      </header>
    </div>
  );
}

export default App;
