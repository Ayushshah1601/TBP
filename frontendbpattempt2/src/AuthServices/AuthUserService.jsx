import axios  from "axios";

const BACKEND_API= "http://localhost:3030";

class AuthUserService {

    sendotp(user){
        return axios.post(BACKEND_API+"/send_otp", user)
    }

    verifyotp(otp){
        return axios.post(BACKEND_API+"/process_otp", otp)
    }

    authenticateuser(logincred){
        return axios.post(BACKEND_API+"/process_login", logincred)
    }

    setaxiosstream(){
        return axios.get(BACKEND_API+"/setup");
    }

}

export default new AuthUserService();