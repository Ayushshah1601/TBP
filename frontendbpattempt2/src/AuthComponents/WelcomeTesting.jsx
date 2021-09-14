import React, { Component } from 'react'

import "./css/style.css"
//import NavBarExcDash from '../PortalComponents/NavBarExcDash';


import logo from "./images/logo_184_91.png"

import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';


export class WelcomeTesting extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.RegHandler = this.RegHandler.bind(this);
        this.LogHandler = this.LogHandler.bind(this);
    }

    RegHandler = () => {
        this.props.history.push("/register")
    }
    LogHandler = () => {

        this.props.history.push("/login")
    }
    componentDidMount(){

        this.props.userLogout()

    }


    render() {
        return (
            <div>
                <div className="Homepage vh-100" style={{ overflow: "hidden" }}>
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                        crossorigin="anonymous"
                    />


                    <img className="image-custom" alt="" src={logo} width="170px" height="auto" />
                    <div className="col-xl-5 mycol">

                        <div class="row">
                            <div class="col-lg-6">
                               
                                <h6 className="pad-right">Welcome to
                               </h6>
                                <h3 className="heading">  <strong>Telstra's  </strong>  </h3>
                                <h3 className="brand">Billfinity</h3>
                                
                                    <div class="wrap">
                                        <button class="mybutton"  onClick={this.LogHandler}> Login <i class="fas fa-angle-right ps-3"></i> </button>
                                         <button class="mybutton" onClick={this.RegHandler}> Register <i class="fas fa-angle-right ps-3"></i></button> 
                                    </div>
                               

                            </div>
                            </div>
                             
                            <div className="mycol">
                                
                                <br/>
                            <br/><br/>
                                        <p className="text-muted sizer">Please read the <a  href="#" style={{color:"black"}}>terms and conditions</a> here.</p>
                        
                      

                            </div>
                        </div>


                </div>
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
)(WelcomeTesting)


