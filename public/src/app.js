import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {AppContainer} from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Master from './styles/Master.scss';

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, middleware);

require('./index.html');

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('app-container')
)
