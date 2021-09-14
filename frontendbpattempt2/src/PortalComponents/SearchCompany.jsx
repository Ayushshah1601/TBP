import axios from "axios";
import React, { Component } from "react";

import PortalBillServices from "../PortalServices/PortalBillServices";
import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import "./css/style_search_company.css"

import CustNav from "./CustNav";

class SearchCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errcom: "d",
            company_name: this.props.match.params.company_name,
            show_company: []
        };
        this.logout = this.logout.bind(this)
        this.dashboard = this.dashboard.bind(this)
    }

    componentDidMount() {

        PortalBillServices.getCompany(this.state.company_name)
            .then(
                res => {

                    if (res.status === 200) {

                        this.setState({
                            show_company: res.data.map(item => Object.values(item))
                        })

                        console.log(this.state.show_company);

                    }

                    else if (res.status === 204) {

                        this.props.history.push({

                            pathname: '/dashboard',

                            state: this.state.errcom
                        });
                    }
                }
            )
    }

    logout() {

        this.props.logout()

        delete axios.defaults.headers.common["Authorization"];

        console.log("Logging out...")

        this.props.history.push("/")

    }

    dashboard() {

        console.log("Returning to dashboard")

        this.props.history.push('/dashboard');

    }



    render() {

        return (

            <div className="container-fluid vh-100" >

                <CustNav />

                <br></br> <br></br>

                <div className="top-custom" >
                    <h1 style={{marginLeft:"30%", fontFamily:"cursive"}}>Search Result For: {this.state.company_name}</h1>
                </div>
                <br />

                <div className="mytable-2 center justify-content-center" style={{marginLeft:"27%"}}>
                    <Table className="bottom-pad-pg-colour">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Company Name</th>
                                <th>Invoices</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.show_company.map(
                                    obj =>
                                        <tr key={obj[0]} >
                                            <td > {obj[1]}</td>
                                            <td >{obj[2]}</td>
                                            <td><button class="bill-button" onClick={(e) => { this.props.history.push(`/portal/search/invoices/${obj[2]}`) }}>BILLS</button></td>
                                        </tr>
                                )
                            }



                        </tbody>
                    </Table>
                </div>
            </div>



        );

    }

}



SearchCompany.propTypes = {



};


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
)(SearchCompany);

