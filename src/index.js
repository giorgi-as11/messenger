import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';
import { Provider } from 'react-redux'
import { persistor, store } from './components/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import './components/firebaseService/firebaseService'
import firebase from 'firebase';
{
  firebase.firestore().enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {

    } else if (err.code == 'unimplemented') {

    }
  })
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>

          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
