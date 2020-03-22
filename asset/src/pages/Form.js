import React, { Component } from 'react'
import 'http'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import profile from '../profilepages/Profile'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             email: '',
             password: '',
             form: false
        }
    }
    
    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        const {name, value} = e.target
        e.preventDefault()
        console.log(this.state)
        fetch("http://localhost:4000/login")
        .then(response => {
            response.json()
            console.log(response)
            // if(name && value == '') {
            //     this.setState({
            //         form: false
            //     })
            // }else {
            //     this.setState({
            //         form: true
            //     })
            // }
            // console.log(this.state.form)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {username, email, password} = this.state
        // if(this.state.form === true) {
        //     // return (<Redirect to='/profile'/>)
        //     console.log("Good")
        // }
        // else {
        //     console.log('Invalid')
        // }
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" 
                    value={username} 
                    onChange={this.handleChange} 
                    name="username"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" 
                    value={email} 
                    onChange={this.handleChange} 
                    name="email"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" 
                    value={password} 
                    onChange={this.handleChange}
                    name="password"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
