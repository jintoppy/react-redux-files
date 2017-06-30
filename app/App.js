import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from './components/Main';
import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';
import AddUser from './containers/AddUser';
import 'whatwg-fetch';
import AppReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];

const store = createStore(
    AppReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

ReactDOM.render(
        <div>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Main}>
                        <Route path="userdetails/:username" component={EmployeeDetails} />
                        <Route path="adduser" component={AddUser} />
                        <IndexRoute component={Home} />
                    </Route>
                </Router>
            </Provider>
        </div>        
    ,
    document.getElementById('container')
)