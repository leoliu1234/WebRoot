import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Home from './containers/home';
import App from './containers/app';
import Favorite from './containers/favorite';
import Layout from './containers/layout';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
middleware.push(createLogger());
// }


const store = createStore(rootReducer,
    applyMiddleware(...middleware)
);
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout} >
                <IndexRoute component={App} />
                <Route path="Home" component={Home} />
                <Route path="App" component={App} />
                <Route path="Favorite" component={Favorite} />
            </Route>
        </Router>
    </Provider >,
    document.getElementById('root'));