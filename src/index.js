import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
