
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import profileReducer from "../reducers/profile"
import thunk from "redux-thunk"
import messagesReducer from "../reducers/messages"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import chatsReducer from "../reducers/chats"
import newsReducer from "../reducers/news"

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    news: newsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)