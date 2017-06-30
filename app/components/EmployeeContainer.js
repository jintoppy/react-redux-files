import React, {Component} from 'react';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedEmployee: null,
            employees: []
        };
    }
    componentWillMount(){
        fetch('http://5955445c2374e400111e47e7.mockapi.io/api/users')
            .then(res => res.json())
            .then(res => this.setState({
                employees: res
            }));
    }
    render(){
        return (
            <div>
                Employee Container
                <EmployeeList 
                    employees={this.state.employees}
                 />
                 <EmployeeDetails 
                    selectedEmployee={this.state.selectedEmployee}
                 />
            </div>
        )
    }
}

export default EmployeeContainer;