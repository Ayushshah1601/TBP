import axios from 'axios';import React, { Component } from 'react'

import AuthUserService from '../AuthServices/AuthUserService';
import "./css/style_login.css"
import imm from "./images/draw2.png"
import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            emailid_login: '',
            password_login: '',
            isLoggedin: ''

        }
        this.changeDetailsUser = this.changeDetailsUser.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);

    }
    changeDetailsUser = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    authenticateUser = (e) => {
        e.preventDefault();
        


        let loginobj = { emailid_login: this.state.emailid_login, password_login: this.state.password_login };
        console.log('user=>' + JSON.stringify(loginobj));
        AuthUserService.authenticateuser(loginobj).then(
            res => {
                if (res.status === 200) {
                    console.log(res.status);
                    this.props.userLogin();
                    axios.defaults.headers.common['Authorization'] = 'Basic ' + window.btoa(this.state.emailid_login + ":" + this.state.password_login)
                    this.props.history.push("/dashboard");
                }
                else if (res.status === 206) { //partial content->disabled otp
                    alert( "Verification of this Account is Pending");
                    this.props.history.push({
                        pathname: '/',
                    });

                }
            }
        ).catch(e => {
            alert("Wrong credentials")
        }
        )
    }
    
    
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous" />

                <section class="vh-100">
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-5 col-lg-5 col-xl-4">
                                <img src={imm} class="img-fluid" width="400px" height="auto" alt="LOGO will be shown here" />
                                <br/>
                                <br/>
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                        <p class="lead fw-normal mb-0 me-3 pos_right">Login with</p>
                                        <button type="button" class="btn btn-dark btn-floating mx-1 pos_right social-login-buttons"><a className="a-color"  style={{textDecoration:"none"}} href="http://localhost:3030/oauth2/authorization/google">Google</a>
                                        &nbsp;<i class="fab fa-google"></i>
                                        </button>

                                        <button type="button" class="btn btn-dark btn-floating mx-1 pos_right social-login-buttons" ><a className="a-color"  style={{textDecoration:"none"}} href="http://localhost:3030/oauth2/authorization/github">Github</a>
                                            &nbsp;<i class="fab fa-github"></i>
                                        </button>
                                    </div>
                            </div>
                            <div class="col-md-9 col-lg-9 col-xl-8 top-custom">

                                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                                <div class="container register ">
                                    <div class="row">

                                        <div class="register-right">

                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <h3 class="register-heading">Login Yourself</h3>
                                                    <div class="row register-form">
                                                        <div>
                                                            
                                                        <p class="small extra fw-bold">Don't have an account? <a href="http://localhost:3000/register"
                                                                             class="link-danger">Register</a></p>

                                                        <br/>
                                                            <div class="form-group">
                                                                <label>Email Id :</label>&nbsp;
                                                                <input type="email"
                                                                    required
                                                                    size="50"
                                                                    placeholder="Email Id"
                                                                    name="emailid_login"
                                                                    value={this.state.emailid_login}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Password: </label>&nbsp;
                                                                <input type="password"
                                                                    required
                                                                    size="50"
                                                                    minLength="6"
                                                                    maxLength="10"
                                                                    placeholder="Password"
                                                                    name="password_login"
                                                                    value={this.state.password_login}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>

                                                            <div class="form-group">
                                                            <button className="btnRegister2" onClick={this.authenticateUser} title="Submit">Login</button>
                                                            
                                                            </div>

                                            

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                                
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}
const mapStateToProps = props => ({
    status: props.status
});


const mapDispatchToProps = () => ({

    userLogin: () => (login()),
    userLogout: () => (logout())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(Login)