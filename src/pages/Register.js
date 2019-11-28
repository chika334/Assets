import React, {Component} from 'react';
import images from '../images/images.jpeg';
import side from '../images/side.png';
import { register } from '../components/UserFunctions';
  
class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onSubmit(e){
        e.preventDefault();
    
          const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
          }
          register(user).then(res => {
            if(res) {
              this.props.history.push(`\login`);
            }
          })
        }
    
      onChange (e){
        this.setState({
          [e.target.name]: e.target.value
        })
        
      };
    
    render() {
        const { formErrors } = this.state;
        return (
          <>
            <img src={images} className="backside"/>
                <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <form onSubmit={this.onSubmit} noValidate>
                    
                    <div className="first_name">
                        <label htmlFor="first_name">First name</label>
                        <input
                        placeholder="first_name"
                        type="first_name"
                        name="first_name"
                        noValidate
                        value={this.state.first_name}
                        onChange={this.onChange}
                        />
                    </div>

                    <div className="last_name">
                        <label htmlFor="last_name">Last name</label>
                        <input
                        placeholder="last_name"
                        type="last_name"
                        name="last_name"
                        noValidate
                        value={this.state.last_name}
                        onChange={this.onChange}
                        />
                    </div>
                    
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        noValidate
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        noValidate
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="createAccount">
                        <button type="submit">Register</button>
                    </div>
                    </form>
                </div>
                </div>
        </>    
        )
    }
}
export default Register;