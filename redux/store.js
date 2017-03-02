import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState, reduxDevTools);
};
