import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default createStore ( reducer, composeWithDevTools(applyMiddleware( thunk, promiseMiddleware() )));