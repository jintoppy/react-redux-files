import React, {Component} from 'react';
import Header from './Header';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'React Training'
        };
    }
    onBtnClick(){
        this.setState({
            name: 'modified name'
        });
    }
    render(){
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main