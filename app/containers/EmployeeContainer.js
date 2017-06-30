import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import * as EmployeeActions from '../actions/employee';


const mapStateToProps = (state) => {
    return {
        employees: state.employee.employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployees: () => {
            dispatch(EmployeeActions.getEmployees())
        }
    };
};

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getEmployees();
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