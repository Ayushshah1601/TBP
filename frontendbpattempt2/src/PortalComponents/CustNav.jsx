import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import "./css/style-navbar.css";
import "./css/style_dash_s2.css";
import { Link } from "react-router-dom";
import LOGO from "./images/logo_184_91.png"
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

toast.configure()
export default class CustNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: 0,
            inputField: '',
            searchContent: ''
            
        }

        this.submitButton = this.submitButton.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        

    }



    submitButton= (e) =>{
        alert(e.searchContent)
    }
    searchHandler = (e) => {
        // let nam = e.target.name;
        // let val = e.target.value;
    this.setState({searchContent: e.target.value});
    }
    // console.log(inputField.search_content)
  


    render() {
        return (
            <div className="navbar-backgrnd">
                
                <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
                <nav className="navbar navbar-default navbar-expand-lg navigation-wrap navigation-wrap.scroll-on nav-border">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            {/* <img src='./images/logo_184_91.png' width="184px" height="auto" /> */}

                            <img alt="" src={LOGO} width="184px" height="auto" style={{ float: "left" }} />
                        </a>

                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                        <div className="container h-10">
                            <div className=" justify-content-center float-right">

                                <div className="searchbar">

                                    <input className="search_input" type="text" name="searchContent"
                                                                    value={this.state.searchContent} onChange={this.searchHandler} placeholder="Search Bills/Company" />
                                    <Link className="search_icon" to={`/portal/searching/${this.state.searchContent}`}><i class='fas fa-search' style={{fontSize:"20px",}}></i></Link>
                                </div>
                            </div>
                        </div>
{/* 
                        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-stream navbar-toggler-icon"></i>
                        </button> */}
                        
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                                
                                <li><Link to="/dashboard"><i class='fas fa-home' style={{fontSize:"35px", color:"blueviolet"}}></i></Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><Link to="/"><i class='fas fa-sign-out-alt' style={{fontSize:"35px", color:"blueviolet"}}></i></Link></li> 
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}
