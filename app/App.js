import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from './components/Main';
import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';
import AddUser from './components/AddUser';
import 'whatwg-fetch';


ReactDOM.render(
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <Route path="userdetails/:username" component={EmployeeDetails} />
                    <Route path="adduser" component={AddUser} />
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        </div>        
    ,
    document.getElementById('container')
)