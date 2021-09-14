import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthUserService from '../AuthServices/AuthUserService'
import { login, logout } from '../Redux/action'

class Success extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topbilled: []

        }

}
    
    componentDidMount() {

        console.log("Bit set the headers")
        AuthUserService.setaxiosstream().then(res=>{
            console.log("res data: " + res.data)
            if(res.data!==""){
                console.log(res.data)
                axios.defaults.headers.common['Authorization'] = 'Basic '+ window.btoa(res.data +":ok")
                console.log('Basic '+ window.btoa(res.data +":ok"))
                this.props.userLogin();
                this.props.history.push("/dashboard")

            }
        })
        

    }

    

    render() {
        return (
            <div>
                {/* <h1> You have successfully Logged In!</h1>
                <h2> Let's Start Billing Billy!</h2>
                <Link to ="/dashboard"> <button> Go to Dashboard</button></Link> */}

            </div>
        )
    }
}
const mapStateToProps = props => ({
    status: props.status
  });
  
  
  const mapDispatchToProps = () => ({ 
  
    userLogin: ()=> (login()),
    userLogout: ()=> (logout())
  
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Success);