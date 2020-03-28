import React, {Component} from 'react';
import images from '../images/images.jpeg';
// import side from '../images/side.png';
import {connect} from 'react-redux';
import {register} from '../actions/userActions';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
  
class Register extends Component {
  userData;
    constructor(props) {
      super(props);
  
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        setAuthToken: '',
        formErrors: {
          firstname: '',
          lastname: '',
          email: "",
          password: ""
        }
      };
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
    
    onSubmit(e){
      e.preventDefault();
      const {register} = this.props
      const user = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      }
      register(user).then(response => {
        if(response.payload) {
          // const app = JSON.stringify(response.payload.token)
          // const d = JSON.parse(app)
          // console.log(d);
          // this.setState({
          //   setAuthToken: d
          // })
          // console.log(y)
          this.props.history.push('/login');
        }
      })
      .catch(error => console.log(error));
    }

    onChange (e){
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "firstname":
          formErrors.firstname = 
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        case "lastname":
          formErrors.lastname = 
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        default:
          break;
      }
      this.setState({ formErrors, [name]: value });
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
                name="firstname"
                noValidate
                value={this.state.firstname}
                onChange={this.onChange}
                />
                {formErrors.firstname.length > 0 && (
                  <span className="errorMessage">{formErrors.firstname}</span>
                )}
              </div>
              <div className="last_name">
                <label htmlFor="last_name">Last name</label>
                <input
                placeholder="last_name"
                type="last_name"
                name="lastname"
                noValidate
                value={this.state.lastname}
                onChange={this.onChange}
                />
                {formErrors.lastname.length > 0 && (
                  <span className="errorMessage">{formErrors.lastname}</span>
                )}
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
                {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
                )}
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
                {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
                )}
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

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  const registerUser = ownProps ? state.user.register : "error"
  // console.log(registerUser)
  return {
    user: registerUser
  }
}

export default connect(null, {register})(Register);