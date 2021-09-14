import axios from "axios";
import React, { Component } from "react";

import PortalBillServices from "../PortalServices/PortalBillServices";
import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';

class SearchCompanyInvoices extends Component {

    constructor(props) {
        super(props);
        console.log("Particular Company's all invoices...")
        this.state = {
            company_name: this.props.match.params.company_name,
            invoices: []
        };

        this.dashboard = this.dashboard.bind(this)
        this.logout = this.logout.bind(this)
    }

    logout() {
        this.props.userLogout()
        delete axios.defaults.headers.common["Authorization"];
        console.log("Logging out...")
                this.props.history.push("/")

    }

    dashboard() {

        console.log("Returning to dashboard")

        this.props.history.push('/dashboard');

    }

    componentDidMount() {

        PortalBillServices.getInvoicesOfCompany(this.state.company_name)

            .then(
                res => {

                    console.log(res.data)
                }
            )
    }
    render() {

        return (

            <div>

                <h2>All Invoices Here</h2>

                <div>

                    <div>

                        <button className="btn btn-primary" style={{ float: "right" }} onClick={this.dashboard}>Dashboard</button>

                    </div>

                    <br></br>

                    <br></br>

                    <div>

                        <button className="btn btn-primary" style={{ float: "right" }} onClick={this.logout}>Logout</button>

                    </div>

                </div>

            </div>

        );

    }

}

const mapStateToProps = props => ({
    status: props.status
  });
  
  
  const mapDispatchToProps = () => ({ 
  
    userLogin: ()=> (login()),
    userLogout: ()=> (logout())
  
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(SearchCompanyInvoices);
