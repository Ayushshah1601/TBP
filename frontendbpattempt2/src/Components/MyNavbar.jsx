import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style-navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const  MyNavbar= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-backgrnd">
      <nav class="navbar navbar-default navbar-expand-lg navigation-wrap navigation-wrap.scroll-on nav-border">
        <div class="container">
          <a class="navbar-brand" href="#">
              <img src="./images/logo_184_91.png" width="184px" height="auto"/>
          </a>

          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <div class="container h-100">
                <div class="d-flex justify-content-center float-right">
                    <div class="searchbar">
                    <input class="search_input" type="text" name="" placeholder="Search..."/>
                    <a href="#" class="search_icon" >Search</a>
                    </div>
                </div>
            </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarText" aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation">
            <i class="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
              <li><button class="main-btn">LOGOUT</button></li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default MyNavbar;