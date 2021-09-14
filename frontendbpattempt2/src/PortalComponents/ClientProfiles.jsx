import React from 'react';
import PortalBillServices from '../PortalServices/PortalBillServices';
import CustNav from './CustNav';
import "./css/client.css"
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class ClientProfiles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [],
            invofcomp: [],
        };


    }
    componentDidMount() {
        PortalBillServices.fetchallcompanies().then(res => {
            console.log("yeh aaya " + res.data)
            this.setState({

                companies: res.data
            })
        })
    }

    render() {
        return (
            <div className="container-fluid ">
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossorigin="anonymous"
                />

                <CustNav />
                <div class="card-deck">
                    {
                        this.state.companies.map(com => (
                            <div class="flip-card" >
                                <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                        <br />
                                        <Link to={"/portal/search/invoices/" + com.companyname} style={{ color: "white", fontSize: "15px" }} >{com.companyname}</Link>
                                        <br />
                                        <Table style={{ borderCollapse: "collapse", "border": "none", "font-size": "12px", "width": "225px", color: "white" }} >
                                            <tr>
                                                <th style={{ border: "none", padding: "5px" }}>Account Number:</th>
                                                <td style={{ border: "none", padding: "5px", float: "left" }}>#{com.id}</td>

                                            </tr>
                                            <tr style={{ border: "none", margin: "0%", }}>
                                                <th style={{ border: "none", padding: "5px" }} >Total availed phone services:</th>
                                                <td style={{ border: "none", padding: "5px" }}>{com.nokia + com.apple + com.samsung + com.oneplus}</td>
                                            </tr>
                                            <tr>
                                                <th style={{ border: "none", padding: "5px" }}>Total availed broadband services:</th>
                                                <td style={{ border: "none", padding: "5px" }}>{com.broadband + com.fixed}</td>
                                            </tr>
                                            <tr>
                                                <th style={{ border: "none", padding: "1px" }}>Status: </th>
                                                <td style={{ border: "none",padding: "1px", color:"green", float:"left", marginRight:"25px"}}>Active</td>

                                            </tr>

                                        </Table>
                                    </div>
                                    <div class="flip-card-front">
                                        <br />
                                        <br />
                                        <br />
                                        <h1>{com.companyname}</h1>

                                    </div>
                                </div>
                            </div>


                        ))
                    }
                </div>

            </div>
        );
    }
}
export default ClientProfiles;