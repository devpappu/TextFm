import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

// const bindMiddleware = middleware => {
//     return composeWithDevTools(applyMiddleware(...middleware));
// };

const initStore = (initialState = {}) => {
    return createStore(rootReducer, initialState);
};
// const initStore = (initialState = {}) => {
//     return createStore(rootReducer, initialState, bindMiddleware([thunkMiddleware]));
// };

export const wrapper = createWrapper(initStore, { debug: true });