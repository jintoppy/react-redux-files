import React, {Component} from 'react';
import EmployeeContainer from '../containers/EmployeeContainer';

class Home extends Component{
    render(){
        return (
            <div>
                This is the home page
                <EmployeeContainer />
            </div>
        )
    }
}

export default Home;