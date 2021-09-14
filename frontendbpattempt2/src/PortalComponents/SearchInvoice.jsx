
import React, { Component } from "react";
import PortalBillServices from "../PortalServices/PortalBillServices";

import "./css/searchinvoice.css"
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './images/logo.png';
import wifi from './images/wifi.jpg';
import mobile from './images/mobile.jpg';
import { Table } from 'react-bootstrap';
import CustNav from "./CustNav";
// import ReactToPrint from "react-to-print";
// import PrintIcon from '@material-ui/icons/Print';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"></link>

toast.configure()
class SearchInvoice extends Component {



    constructor(props) {



        super(props);



        this.state = {
            errinv: "b",
            errfor: "c",
            curr_inv: [],
            inv_number: this.props.match.params.inv_number,
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };

        this.mailhandler = this.mailhandler.bind(this);



    }

    mailhandler(invid) {
        console.log("I will generate a mail")
        PortalBillServices.generatemail(invid).then(res => {
            console.log("mail sent")
            toast.success(("Sent Mail! Great Work!"))

        })
    }


    componentDidMount() {
        PortalBillServices.getInvoice(this.state.inv_number)
            .then(
                res => {
                    if (res.status === 200) {
                        this.setState({
                            curr_inv: [res.data]
                        })
                        console.log(this.state.curr_inv)

                    }
                    else if (res.status === 204 || res.status === 4) {
                        this.props.history.push({
                            pathname: '/dashboard',

                            state: this.state.errinv
                        });
                    }
                }

            ).catch(e => {
                this.props.history.push({
                    pathname: '/dashboard',

                    state: this.state.errfor
                });

            })



    }

    render() {

        return (
            <div>
                <div class="hide">
                <CustNav />
                </div>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossorigin="anonymous"
                />
                <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"></link>
                <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

                {this.state.curr_inv.map(inv => (
                    <div class="card card-prop" style={{ marginTop: "30px", marginBottom: "0px", width: "70%"}} >
                        <div class="card-body">
                            <div class="container-fluid ">
                                <div class="row d-flex align-items-baseline">
                                    <div class="col-md-3">
                                        <p id="p1" >Invoice &gt;&gt; <strong>ID: #{inv.id}  </strong></p>
                                    </div>
                                    <div class="col-xl-6">

                                        <div class="print-btn photo-cust">
                                            <button type="button" class="btn btn-success btn-lg" style={{ marginLeft: "370px" }} onClick={() => window.print()}  >     Print   </button>

                                        </div>
                                    </div>

                                </div>
                                <div class="container ">
                                    <div class="col-md-12 shift">
                                        <div class="text-center ">
                                            <img src={logo} id="logo" alt="" className="shift"></img>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <ul class="list-unstyled">
                                                <li id="to" >To: <span id="span1" > <strong> {inv.companyname} </strong></span></li>
                                                <li class="text-muted"></li>
                                                <li class="text-muted"></li>
                                                <li class="text-muted"><i class="fas fa-phone">123-123-123</i> </li>
                                            </ul>
                                        </div>

                                        <div class="col-md-2">
                                        </div>
                                        <div class="col-xl-4 rightprint">

                                            <ul class="list-unstyled">
                                                <li class="text-muted deet"><i class="fas fa-circle i" ></i> <span
                                                    class="fw-bold">ID:</span>#{inv.id}</li>
                                                <li class="text-muted deet"><i class="fas fa-circle i" ></i> <span
                                                    class="fw-bold">Creation Date:  </span> {this.state.months[inv.month - 1] + "-" + inv.year}</li>
                                                <li class="text-muted deet"><i class="fas fa-circle i"></i> <span
                                                    class="me-1 fw-bold">Status:</span><span class="badge text-black fw-bold " id={inv.statusofinvoice}>
                                                        {inv.statusofinvoice}</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="row my-2 mx-1 ">
                                        <div class="col-md-2 ">
                                            <div class=" bg-image ripple rounded-5 mb-4 d-block" data-ripple-color="light">

                                                <img src={wifi} class="photo-cust"
                                                    alt="" />
                                                <a href="#!">
                                                    <div class="hover-overlay">
                                                        <div class="mask" id="div1" ></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-9 tableprint">
                                            <Table style={{ "border": "1px solid white", "font-size": "15px" }} className="custom-table" >
                                                <thead>
                                                    <tr>

                                                        <th style={{ "text-align": "left" }}>Description</th>
                                                        <th>Units</th>
                                                        <th>Charges</th>

                                                    </tr>
                                                    <tr>

                                                        <td style={{ "text-align": "left" }}>Broadband Data Charges <span style={{ "color": "white" }}>.</span>   </td>
                                                        <td>{Math.round(inv.total_bb_usage)} MB</td>
                                                        <td> ${Math.round(inv.total_bb_usage) * 0.01}       </td>

                                                    </tr>
                                                    <tr>
                                                        <td style={{ "text-align": "left" }}>Fixed cost</td>
                                                        <td>NA</td>
                                                        <td>${Math.round(inv.fixed_bb_cost)}</td>


                                                    </tr>
                                                </thead>

                                            </Table>
                                        </div>

                                    </div>

                                    <div class="row my-2 mx-1  ">
                                        <div class="col-md-2 ">
                                            <div class=" bg-image ripple rounded-5  mb-4  overflow-hidden d-block" data-ripple-color="light">

                                                <img src={mobile} class="photo-cust"
                                                    alt="" />
                                                <a href="#!">
                                                    <div class="hover-overlay">
                                                        <div class="mask" id="div1" ></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-9 tableprint">
                                            <Table style={{ "border": "1px solid white", "font-size": "15px" }}    >
                                                <thead>

                                                    <tr>

                                                        <td style={{ "text-align": "left" }}>One Time Charges</td>
                                                        <td>NA</td>
                                                        <td> ${Math.round(inv.one_time_cost)}       </td>

                                                    </tr>


                                                    <tr>
                                                        <td style={{ "text-align": "left" }}>Mobile Call Charges</td>
                                                        <td>   {inv.total_call_usage}           </td>
                                                        <td>${Math.round((inv.total_call_usage) * 0.2)}</td>
                                                    </tr>


                                                    <tr>
                                                        <td style={{ "text-align": "left" }}>Mobile SMS Charges</td>
                                                        <td>   {inv.total_sms_usage}           </td>
                                                        <td>${Math.round((inv.total_sms_usage) * 0.05)}</td>
                                                    </tr>


                                                    <tr>
                                                        <td style={{ "text-align": "left" }}>Mobile Data Charges</td>
                                                        <td>   {inv.total_data_usage} MB          </td>
                                                        <td>${Math.round((inv.total_data_usage) * 0.1)}</td>
                                                    </tr>


                                                </thead>

                                            </Table>
                                        </div>

                                    </div>



                                    <hr />



                                    <div class="row">
                                        <div class="col-xl-12">

                                            <p class="text-black "><span id="s1" class="text-black  me-3 center" > Total Amount: <span class="tab" ></span>
                                                ${Math.round(inv.total_bb_usage * 0.01 + inv.fixed_bb_cost + inv.one_time_cost + inv.total_call_usage * 0.2 + inv.total_sms_usage * 0.05 + inv.total_data_usage * 0.1)}
                                            </span></p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="glow-on-hover printable" onClick={() => this.mailhandler(inv.id)} >Send Invoice</button>
                            </div>
                        </div>


                    </div>

                ))
                }




            </div>

        );

    }

}



export default SearchInvoice;