import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from './components/Main';
import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';
import AddUser from './containers/AddUser';
import 'whatwg-fetch';
import AppReducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(AppReducer);

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