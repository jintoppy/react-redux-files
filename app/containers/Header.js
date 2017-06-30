import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const mapStateToProps = (state) => {
    return {
        employeesCount: state.employee.employees.length
    };
};

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: [
                {
                    link: '/adduser',
                    title: 'Add User'
                },
                {
                    link: '/',
                    title: 'Home'
                }
            ]
        };
    }
    render(){
        const listItems = this.state.menuItems.map((item, index) => {
            return (
                <li key={index}>
                    <Link 
                        activeClassName="active" 
                        to={item.link}>
                            {item.title}
                    </Link>
                </li>
            )
        });
        return (
            <div className="header">
                <div className="logo">

                </div>
                <div className="nav">
                    <ul>
                        {listItems}
                    </ul>
                    <span className="right-header">
                        Count: {this.props.employeesCount}
                    </span>
                </div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header);