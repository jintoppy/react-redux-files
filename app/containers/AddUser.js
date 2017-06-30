import React, {Component} from 'react';
import * as EmployeeActions from '../actions/employee';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (employee) => {
            dispatch(EmployeeActions.addUser(employee))
        }
    };
};

class AddUser extends Component{
    constructor(props){
        super(props);
    }
    onSubmit(e){
        e.preventDefault();
        console.log('form submitted');
        this.props.addUser({
            name: this.refs.name.value,
            designation: this.refs.designation.value
        });

    }
    render(){
        return (
            <div>
                <h2>Add User</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        Name:  <input type="text" ref="name" />
                    </div>
                    <div>
                        Designation:  <input type="text" ref="designation" />
                    </div>
                    <div>
                        <input type="submit" value="Add" />
                    </div>

                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddUser);
