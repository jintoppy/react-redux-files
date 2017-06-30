import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeList from '../components/EmployeeList';


const mapStateToProps = (state) => {
    return {
        employees: state.employee.employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        employeeListReceived: (employees) => {
            dispatch({
                type: 'EMPLOYEE_LIST_RECEIVED',
                payload: employees
            })
        }
    };
};

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        fetch('http://5955445c2374e400111e47e7.mockapi.io/api/users')
            .then(res => res.json())
            .then(res => this.props.employeeListReceived(res));
    }
    render(){
        return (
            <div>
                Employee Container
                <EmployeeList 
                    employees={this.props.employees}
                 />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);