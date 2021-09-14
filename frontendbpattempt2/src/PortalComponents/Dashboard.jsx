import axios from 'axios';
import React, { Component } from 'react'
import PortalBillServices from '../PortalServices/PortalBillServices';
import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
//import { Link } from "react-router-dom";
import "./css/style_topbilled.css"
import "./css/style_dash_s2.css"

import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style-navbar.css";
import CustNav from './CustNav';
toast.configure()
class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchError: this.props.location.state,
            topbilled: [],
            topbilledafterthree: [],
            unpaid: [],
            searchContent: '',
            row_num: 4,
            delayed:[]
        }

        // console.log(this.state.searchError);
        // this.gettopbilled = this.gettopbilled.bind(this);
        // this.getunpaid = this.getunpaid.bind(this);
        this.changeSearchcontents = this.changeSearchcontents.bind(this);
        this.startSearch = this.startSearch.bind(this);
        this.logout = this.logout.bind(this)
        this.dashboard = this.dashboard.bind(this)
    }
    
    mailhandler(invid) {
        console.log("I will generate a mail")
        PortalBillServices.generatemail(invid).then(res => {
            console.log("mail sent")
            toast.success(("Sent Mail! Great Work!"))

        })
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
        // this.gettopbilled();
        // this.getunpaid();
        const { isNotificationOpen } = this.props;
        isNotificationOpen && this.notify();


        if(this.state.searchError==="a"){
            toast("The format you've entered is wrong, please search a company or Invoice('inv:')")
        }
        else if(this.state.searchError==="b"){
            toast("The invoice number you've asked for does not exist")

        }
        else if(this.state.searchError==="c"){
            toast("Please enter the correct format inv:invid")

        }
        else if(this.state.searchError==="d"){
            toast("The Company you've searched for does not exist")
        }

    

        PortalBillServices.fetchtopbilled().then(res => {

            this.setState({
                topbilled: Object.values(res.data)
            })

            this.setState({
                topbilledafterthree: Object.values(res.data).slice(3)
            })

            console.log("Topbilled")

            console.log(typeof this.state.topbilled);
            console.log(this.state.topbilled);
            console.log(this.state.topbilledafterthree);

            console.log(Object.keys(this.state.topbilled));
            console.log("Topper")
            console.log(this.state.topbilled[0][0]);

            PortalBillServices.fetchdelayed().then(res=>{
                console.log(res.data +"yeh tha")
                console.log(Object.values(res.data)+"yeh hogaya ")
                this.setState({
                    delayed:Object.values(res.data)
                })
            })
            

            PortalBillServices.fetchunpaid().then(res => {
                this.setState({
                    unpaid: Object.values(res.data)
                })

                console.log("Unpaid")
                console.log(typeof this.state.unpaid);
                console.log(this.state.unpaid);
            })

        })

    }

    // gettopbilled() {

    // }

    // getunpaid() {

    // }

    changeSearchcontents = (event) => {
        this.setState({
            searchContent: event.target.value
        })
    }


    startSearch = (event) => {
        console.log("search data")
        console.log(this.state.searchContent)
        this.props.history.push(`/portal/searching/${this.state.searchContent}`)
    }

    render() {
        return (

            <div>

                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                        crossorigin="anonymous"
                    />

                <CustNav/>

                <br></br>

                <br></br>

                <div className="d-flex justify-content-around">

                    <div className="p-2 col-md-6 col-xl-5 col-lg-6 bd-highlight col-example">

                        <div>
                            <div class="mycard ">

                                <div class="header">
                                <i class=""></i>
                                    <h3 class="title center-for-dash">Top Billed</h3>
                                    <div></div>
                                </div>

                                <div class="profile">

                                    <div class="person second">
                                        {/* <div class="num">2</div> */}
                                        <i class="fas fa-caret-up"></i>
                                        <img src={second} alt="" class="photo" />

                                        
                                        {this.state.topbilled[1] !== undefined ?

                                            
                                            <p class="mylink">{this.state.topbilled[1][0]}</p>

                                            :
                                            null
                                        }

                                        {this.state.topbilled[1] !== undefined ?


                                            <p class="points">${Math.round(this.state.topbilled[1][1])}</p>
                                            :
                                            null
                                        }


                                    </div>

                                    <div class="person first">
                                        {/* <div class="num">1</div> */}
                                        <i class="fas fa-crown"></i>
                                        <img src={first} alt="" class="photo mymain" />

                                        {this.state.topbilled[0] !== undefined ?

                                            <p class="mylink">{this.state.topbilled[0][0]}</p>

                                            :
                                            null
                                        }

                                        {this.state.topbilled[0] !== undefined ?


                                            <p class="points">${Math.round(this.state.topbilled[0][1])}</p>
                                            :
                                            null
                                        }

                                    </div>

                                    <div class="person third">
                                        {/* <div class="num">3</div> */}
                                        <i class="fas fa-caret-up"></i>
                                        <img src={third} alt="" class="photo" />

                                        {this.state.topbilled[2] !== undefined ?

                                            <p class="mylink">{this.state.topbilled[2][0]}</p>

                                            :
                                            null
                                        }

                                        {this.state.topbilled[2] !== undefined ?


                                            <p class="points">${Math.round(this.state.topbilled[2][1])}</p>
                                            :
                                            null
                                        }

                                    </div>

                                </div>

                                {/* <div class="rest">
                                    <div class="others myflex">
                                        <div class="rank">
                                            <i class="fas fa-caret-up"></i>
                                            <p class="num">4</p>
                                        </div>
                                        <div class="info myflex">
                                            <img src="https://image.flaticon.com/icons/png/512/2922/2922510.png" alt="" class="p_img" />
                                            <p class="mylink">@adam56</p>
                                            <p class="res-points">7861</p>
                                        </div>
                                    </div>

                                </div> */}


                                {/* <Table >
                                    <thead>
                                        <tr>
                                            
                                            <th>Company Name</th>
                                            <th>Bill</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.topbilledafterthree.map(obj =>

                                                <tr key={obj[0]} >
                                    
                                                    <td> {obj[0]}</td>
                                                    <td> {Math.round(obj[1])}</td>
                                                </tr>
                                            )
                                        }

                                    </tbody>

                                </Table> */}


                                {/*                                 

                                    {

                                        // this.state.topbilled != undefined ?

                                        this.state.topbilledafterthree.map((obj) => {

                                            <tr>
                                                <td>

                                                    <div class="rest">
                                                        <div class="others myflex">
                                                            <div class="rank">
                                                                <i class="fas fa-caret-up"></i>
                                                                <p class="num">4</p>
                                                            </div>
                                                            <div class="info myflex">
                                                                <img src="https://image.flaticon.com/icons/png/512/2922/2922510.png" alt="" class="p_img" />
                                                                <p class="mylink">{obj[0]}</p>
                                                                <p class="res-points">{obj[1]}</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>
                                        })



                                    } */}



                            </div>
                            <div>
                                <div class="mycard-delayed">
                                    <h3 className="center-for-dash top-for-dash">Delayed invoices: </h3>
                                    <Table style={{borderBottom:"0px"}}>
                                    <thead>
                                        <tr>
                                            <th className="center-for-dash">Company Name</th>
                                            <th className="center-for-dash">Bill</th>
                                            <th className="center-for-dash">Reminder</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                   


                                    {
                                                this.state.delayed.map(obj =>

                                                    <tr key={obj[0]} >
                                                        <td className="center-for-dash"> {obj[1]}</td>
                                                        <td className="center-for-dash"> ${Math.round(obj[2])}</td>
                                                        <td className="center-for-dash"> <button class="glow-on-hover2" onClick={()=>this.mailhandler(obj[0])} >Send</button></td>
                                                    </tr>
                                                )
                                            }

                                    </tbody>

                                </Table>
                                    
                                    
                                </div>
                                
                        
                            </div>
                        </div>




                    </div>

                    <div className="p-2 col-md-5 col-xl-6 col-lg-5 bd-highlight col-example offset-xl-1 " >
                            <div>
                                <button className="company-button" onClick={()=>this.props.history.push("/portal/allcompanies")}>
                                Company Profiles &nbsp; &nbsp; <i class="arrow fas fa-chevron-right"></i>
                                </button>
                            </div>
                        <div>
                            <div className="mycard-unpaid">
                                <div class="header">
                                    <h3 class="title center-for-dash top-for-dash">Unpaid Invoices</h3>
                                    
                                    <div></div>
                                </div>

                                <div>

                                    <Table className="MyCardTableUnpaid bottom-for-dash-table">
                                        <thead>
                                            <tr>

                                                <th className="center-for-dash">Company Name</th>
                                                <th className="center-for-dash">Invoice Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {
                                                this.state.unpaid.map(obj =>

                                                    <tr key={obj[0]} >
                                                        <td className="center-for-dash"> {obj[0]}</td>
                                                        <td className="center-for-dash"> ${Math.round(obj[1])}</td>
                                                    </tr>
                                                )
                                            }

                                        </tbody>

                                    </Table>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>





            // <div>

            //     <div>
            //         <button className="btn btn-primary" style={{ float: "right" }} onClick={this.dashboard}>Dashboard</button>
            //     </div>
            //     <br></br>
            //     <br></br>
            //     <div>
            //         <button className="btn btn-primary" style={{ float: "right" }} onClick={this.logout}>Logout</button>
            //     </div>
            //     <div className="searchbar">
            //         <form>
            //             <div className="form-group row">
            //                 <label>Search Portal: </label>
            //                 <input type="text"

            //                     placeholder="Search Any Bill"
            //                     name="searchContent"
            //                     value={this.state.searchContent}
            //                     onChange={this.changeSearchcontents} />
            //             </div>
            //             <button className="" onClick={this.startSearch} title="button">***GO***</button>
            //             <p> {this.state.error}</p>


            //         </form>
            //     </div>
            //     <div>
            //         <table style={{ float: "left" }} border="1" cellPadding="10">
            //             <thead>
            //                 <tr>
            //                     <th>Company Name</th>
            //                     <th>Total Business Value</th>
            //                 </tr>

            //             </thead>
            //             <tbody>
            //                 {
            //                     this.state.topbilled.map(
            //                         item =>
            //                             <tr key={item[0]} >
            //                                 <td > {item[0]} </td>
            //                                 <td>{item[1]}</td>
            //                             </tr>
            //                     )
            //                 }
            //             </tbody>
            //         </table>
            //         <table style={{ float: "right" }} border="1" cellPadding="10">
            //             <thead>
            //                 <tr>
            //                     <th>Company Name</th>
            //                     <th>Total Unpaid Values</th>
            //                 </tr>

            //             </thead>
            //             <tbody>
            //                 {
            //                     this.state.unpaid.map(
            //                         item =>
            //                             <tr key={item[0]} >
            //                                 <td >{item[0]} </td>
            //                                 <td>{item[1]}</td>
            //                             </tr>
            //                     )
            //                 }
            //             </tbody>
            //         </table>
            //     </div>
            // </div>

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
)(Dashboard);
