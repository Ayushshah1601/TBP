
import React, { Component } from "react";
import "./css/invoices.css"
import PortalBillServices from "../PortalServices/PortalBillServices";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import wifi from './images/wifi.jpg';
import mobile from './images/mobile.jpg';
import { Table } from 'react-bootstrap';
import CustNav from "./CustNav";
<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"></link>

class Invoices extends Component {
    constructor(props) {
        super(props);
        console.log("Particular Company's all invoices...")
        this.state = {
            company_name: this.props.match.params.company_name,
            invoices: [],
            data: [],
            count: 0,
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        };
        this.mColorChange = this.mColorChange.bind(this);
        this.bColorChange = this.bColorChange.bind(this);


    }

    mColorChange = () => {
        var element = document.getElementById("mobile-tot-amt")
        element.id = "mColorChange"
        console.log(element);
    }
    bColorChange = () => {
        var element = document.getElementById("broadband-tot-amt")
        element.id = "bColorChange"
        console.log(element);
    }






    componentDidMount() {

        PortalBillServices.getInvoicesOfCompany(this.state.company_name)
            .then(
                res => {
                    this.setState({
                        invoices: res.data.reverse()

                    })

                    this.state.invoices.map(inv => {

                        this.setState({

                            data: [...this.state.data, {
                                x: this.state.months[inv.month - 1] + "-" + inv.year,
                                y: inv.total_cost
                            }]
                        })
                    })
                    console.log(this.state.data)

                    console.log(this.state.data);
                    console.log(this.state.invoices);


                }

            )
    }


    render() {




        return (

            <div>
                <CustNav/>
                <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"></link>
                <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
                {/* <h2>{this.state.company_name}</h2> */}
                <br/>
                <div className="heading" style={{marginLeft:"43%"}}>
                    <h1 style={{fontFamily:"Segoe UI"}}><u>{this.state.company_name}</u></h1>
                </div>
                <div class="chart">

                    <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart data={this.state.data} margin={{ right: 50 }}>
                            <CartesianGrid />
                            <XAxis dataKey="x"
                                interval={'preserveStartEnd'} />
                            <YAxis></YAxis>
                            <Tooltip />
                            <Line dataKey="y"
                                stroke="red" activeDot={{ r: 12 }} />
                        </LineChart>
                    </ResponsiveContainer>

                </div>

                {
                    this.state.invoices.map(inv => (
                        <div className="container-fluid card" id={inv.statusofinvoice} style={{ width: "90%", height: "40%" }}>

                            <div  key={inv.id}>



                                <div className="card-body">
                                    <div className="col-md-12">
                                        <div class="company_info" >
                                            <p id="company_id"  className="card-text" >
                                                
                                                    
                                                        Invoice id: {inv.id}
                                                    
                                               
                                            </p>

                                            <p id="company_name" className="card-text">
                                                {this.state.company_name}
                                            </p>
                                            <p id="date" className="card-text" >

                                                {this.state.months[inv.month - 1] + "-" + inv.year}
                                            </p>

                                        </div>
                                    </div>

                                    <div id="broadband" className="container-fluid card" style={{ width: '95%' }}>
                                        <div id="broadband-child" className="row no-gutters">
                                            <div className="col-md-1">
                                                <img class="wifi_pic" alt= "" src={wifi} ></img>

                                            </div>

                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <div id="pp" className="col-md-8">
                                                        <Table broadband-table striped bordered hover >
                                                            <thead>
                                                                <tr>

                                                                    <th>Broadband Usage</th>
                                                                    <th>Broadband Charges</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{Math.round(inv.total_bb_usage)} MB</td>
                                                                    <td>${Math.round(inv.total_bb_usage * 0.01 + inv.fixed_bb_cost)}</td>

                                                                </tr>
                                                            </tbody>
                                                        </Table>



                                                    </div>







                                                </div>

                                            </div>

                                            <div className="col-md-2">

                                                <div class="flip-box">
                                                    <div class="flip-box-inner">
                                                        <div class="flip-box-front">
                                                            <h4 style={{ color: "black" }}>Amount</h4>
                                                        </div>
                                                        <div class="flip-box-back">
                                                            <h3 style={{ color: "white" }}  >${Math.round(inv.total_bb_usage * 0.01 + inv.fixed_bb_cost)}   </h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className="col-md-2">
                                                    <button onClick={this.bColorChange} type="button" class="btn btn-primary btn-lg new-cust-btn amount">Amount</button>
                                                    <p id="broadband-tot-amt" > Total Amount: {inv.total_bb_cost}   </p>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>

                                    <div id="mobile" className="container-fluid card" style={{ width: '95%' }}>
                                        <div id="mobile-child" className="row no-gutters" >
                                            <div className="col-md-1">
                                                <img class="mobile_pic" alt="" src={mobile} ></img>
                                            </div>

                                            <div className="col-md-9">

                                                <div className="card-body">
                                                    <div id="pp2" className="col-md-11">

                                                        <Table mobile-table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>OTC</th>
                                                                    <th>Call Usage</th>
                                                                    <th>Call Cost</th>
                                                                    <th>SMS Usage</th>
                                                                    <th>SMS Cost</th>
                                                                    <th>Data Usage</th>
                                                                    <th>Data Cost</th>
                                                                    <th>Total Cost</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>${Math.round(inv.one_time_cost)}</td>
                                                                    <td>{Math.round(inv.total_call_usage)}</td>
                                                                    <td>${Math.round(inv.total_call_usage * 0.2)}</td>
                                                                    <td>{Math.round(inv.total_sms_usage)}</td>
                                                                    <td>${Math.round(inv.total_sms_usage * 0.05)}</td>
                                                                    <td>{Math.round(inv.total_data_usage)} MB</td>
                                                                    <td>${Math.round(inv.total_data_usage * 0.1)}</td>
                                                                    <td>${Math.round(inv.one_time_cost) + Math.round(inv.total_call_usage * 0.2) + Math.round(inv.total_sms_usage * 0.05) + Math.round(inv.total_data_usage * 0.1)}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>


                                                    </div>




                                                </div>
                                            </div>

                                            <div className="col-md-2">



                                                <div class="flip-box">
                                                    <div class="flip-box-inner">
                                                        <div class="flip-box-front">
                                                            <h4 style={{ color: "black" }}>Amount</h4>
                                                        </div>
                                                        <div class="flip-box-back">
                                                            <h3 style={{ color: "white" }}  >${Math.round(inv.one_time_cost) + Math.round(inv.total_call_usage * 0.2) + Math.round(inv.total_sms_usage * 0.05) + Math.round(inv.total_data_usage * 0.1)}   </h3>
                                                        </div>
                                                    </div>
                                                </div>



                                                {/* <button onClick={this.mColorChange} type="button" class="btn btn-primary btn-lg new-cust-btn amount">Amount</button>
                                                    <p id="mobile-tot-amt" > Total Amount: {inv.total_call_cost + inv.total_sms_cost + inv.total_data_cost + inv.one_time_cost}     </p> */}
                                            </div>
                                        </div>
                                    </div>




                                    <div className="card-body">
                                        <div className="col-md-10">
                                            {/* <div class="flip-box-total">
                                                <div class="flip-box-inner-total">
                                                    <div class="flip-box-front-total">
                                                        <h4 style={{ color: "black" }}>Total</h4>
                                                    </div>
                                                    <div class="flip-box-back-total">
                                                        <h3 style={{ color: "white" }}  >${Math.round(inv.total_cost)}   </h3>
                                                    </div>
                                                </div>
                                            </div> */}
                                            
                                            <button onClick={() => this.props.history.push(`/portal/search/inv/${inv.id}`)} id="get-inv-btn" type="button" class="btn btn-primary btn-lg new-cust-btn">
                                                Generate Invoice</button>

                                        </div>
                                    </div>

                                </div>




                                {/* <input type="checkbox" data-on="Total Amount" data-off={inv.total_cost} checked data-toggle="toggle" data-onstyle="warning" data-offstyle="info"></input>
                                            <button type="button" class="btn btn-primary btn-lg new-cust-btn">
                                                Total Amount</button> */}




                            </div>
                        </div>






                    ))
                }
            </div>
        );

    }

}




export default Invoices;

