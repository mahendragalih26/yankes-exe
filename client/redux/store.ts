import { AnyAction, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk";
import rootReducer from './rootReducer';

const reducer = (state: any, action: AnyAction) => {
    return rootReducer(state, action);
}

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

const store = createStore(reducer, bindMiddleware([thunkMiddleware]))

export default store