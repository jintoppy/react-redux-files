import React, {Component} from 'react';

class AddUser extends Component{
    constructor(props){
        super(props);
    }
    onSubmit(e){
        e.preventDefault();
        console.log('form submitted');
        fetch('http://5955445c2374e400111e47e7.mockapi.io/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({
                 name: this.refs.name.value,
                 designation: this.refs.designation.value
             })
        })


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

export default AddUser;