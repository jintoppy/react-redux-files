import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types'; 

class EmployeeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser: {
                name: '',
                empId: ''
            }
        };
    }
    render(){
        const employees = this.props.employees.map((emp, index) => {
            return (
                <tr key={index}>
                    <td>{emp.name}</td>
                    <td>{emp.id}</td>
                    <td>
                        <Link to={"/userdetails/"+emp.id}>View Details</Link>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees}
                    </tbody>
                </table>
            </div>
        )
    }

    onAdd(event){
        event.preventDefault();
        console.log(this.refs.name);
    }
    
}

EmployeeList.propTypes = {
    employees: PropTypes.arrayOf(Object).isRequired
};

EmployeeList.defaultProps = {
    employees: []
};



export default EmployeeList;