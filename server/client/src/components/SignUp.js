import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    submit(e){
        e.preventDefault();
        axios.post('/api/auth/signup', {
            email: this.state.email,
            password: this.state.password
        })
        this.setState({
            email: '',
            password: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={e=>this.submit(e)}>
                    <label>Email</label><input type="email" name="email" onChange={e => this.change(e)} value={this.state.email}/>
                    <label>Password</label><input type="password" name="password" onChange={e=>this.change(e)} value={this.state.password} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}



export default SignUp;
