import React, { Component } from 'react'

import AuthUserService from '../AuthServices/AuthUserService';
import "./css/style_register.css"
import imm from "./images/draw2.png"

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            otp: '',
            emailid: '',
            firstname: '',
            lastname: '',
            password: '',
            password_validation: '',
            customColor: {},
            error_msg: '',
            valid:'',


        }
        this.changeDetailsUser = this.changeDetailsUser.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.confirmpass = this.confirmpass.bind(this);
    }

    confirmpass = (e) => {
        this.setState({
            password_validation:e.target.value
        })
        if (this.state.password === e.target.value) {
            this.setState({
                customColor: { "background-color": "lightgreen" },
                valid:"som"
            });
        }
        else {
            this.setState({
                customColor: { "background-color": "lightcoral" },
                valid:""
            })
        };
    }

    changeDetailsUser = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = { emailid: this.state.emailid, firstname: this.state.firstname, password: this.state.password, lastname: this.state.lastname };
        console.log('user=>' + JSON.stringify(user));
        AuthUserService.sendotp(user).then(res => {

            this.setState({
                value: "something",
                valid:""
            })
            alert("OTP sent!");

        }).catch(error => {
            alert("This email Id already exists");
        });
    }
    saveOtp = (e) => {
        e.preventDefault();
        let verificationcode = { otp: this.state.otp }
        AuthUserService.verifyotp(verificationcode).then(res => {
            this.props.history.push("/login")
        }).catch(
            error => {
                alert("You've entered the wrong OTP");

            }

        )

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
                                <img src={imm} class="img-fluid pos-right" width="400px" height="auto" alt="LOGO will be shown here" />
                                <div>
                                    <br />
                                    <br />
                                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                        <p class="lead fw-normal mb-0 me-3 pos_right">Register with</p>
                                        <button type="button" class="btn btn-dark btn-floating "><a className="a-color" style={{textDecoration:"none"}} href="http://localhost:3030/oauth2/authorization/google">Google</a>
                                        &nbsp;<i class="fab fa-google"></i>
                                        </button>

                                        <button type="button" class="btn btn-dark btn-floating mx-1 pos_right social-login-buttons" ><a className="a-color"   style={{textDecoration:"none"}} href="http://localhost:3030/oauth2/authorization/github">Github</a>
                                            &nbsp;<i class="fab fa-github"></i>
                                        </button>
                                    </div>
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
                                                    <h3 class="register-heading">Register Yourself</h3>
                                                    <div class="row register-form">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>First Name  : </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <input placeholder="First Name"
                                                                    
                                                                    name="firstname"
                                                                    value={this.state.firstname}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>

                                                            <div class="form-group">
                                                                <label>Email Id:</label> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <input type="email"
                                                                    required
                                                                    placeholder="Email Id"
                                                                    name="emailid"
                                                                    value={this.state.emailid}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>

                                                            <div class="form-group">
                                                                <label>Confirm Password: </label> &nbsp; 
                                                                <input type="password"
                                                                    id="passconf"
                                                                    required
                                                                    style={this.state.customColor}
                                                                    minLength="6"
                                                                    maxLength="10"
                                                                    placeholder="Password"
                                                                    name="password_validation"
                                                                    value={this.state.password_validation}
                                                                    onChange={this.confirmpass}
 />
                                                            </div>
                                                            

                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>LastName: </label> &nbsp;  &nbsp;   
                                                                <input placeholder="Last Name"
                                                                    required
                                                                    name="lastname"
                                                                    value={this.state.lastname}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>
                                                            <div class="form-group">
                                                            </div>
                                                            

                                                            <div class="form-group">
                                                                <label>Password: </label> &nbsp; &nbsp; &nbsp;
                                                                <input type="password"
                                                                    required
                                                                    minLength="6"
                                                                    maxLength="10"
                                                                    placeholder="Password"
                                                                    name="password"
                                                                    value={this.state.password}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>
                                                            <button disabled={!this.state.valid} class="btnRegister" onClick={this.saveUser} title="Submit">Send OTP</button>
                                                        </div>
                                                        

                                                        <div class="col-md-6">
                                                        <br/>
                                                        <br/>
                                                            <div class="form-group">
                                                                <label>OTP   : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <input
                                                                    placeholder="One Time Password"
                                                                    required
                                                                    name="otp"
                                                                    value={this.state.otp}
                                                                    onChange={this.changeDetailsUser} />
                                                            </div>
                                

                                                        </div>
                                                        <br/>
                                                        <br/>
                                                        <div class="col-md-6">
                                                        
                                                            <div >
                                                            <button className="" disabled={!this.state.value} class="btnRegister" onClick={this.saveOtp} title="Submit">Register</button>
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

export default Register