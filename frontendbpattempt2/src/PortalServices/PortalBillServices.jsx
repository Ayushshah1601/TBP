import axios from "axios";
const BACKEND_API_PORTAL = "http://localhost:3030/portal"

class PortalBillService{

    fetchtopbilled(){
        
        return axios.get(BACKEND_API_PORTAL+"/topbilled")
    }
    fetchunpaid(){
        return axios.get(BACKEND_API_PORTAL+"/unpaid")
    }
    getCompany(company_name){

        return axios.get(BACKEND_API_PORTAL+"/search/company/"+company_name)

    }

    getInvoice(invoice_num){

        return axios.get(BACKEND_API_PORTAL+"/search/inv/"+invoice_num)

    }


    getInvoicesOfCompany(company_name){

        return axios.get(BACKEND_API_PORTAL+"/search/compinv/"+company_name)

    }

    fetchdelayed(){
        return axios.get(BACKEND_API_PORTAL+"/delayed")
    }

    fetchallcompanies(){
        return axios.get(BACKEND_API_PORTAL+"/companiesAll")
    }

    generatemail(inv_id){
        return axios.get(BACKEND_API_PORTAL+"/inv/mail/"+inv_id)
    }

    
}

export default new PortalBillService();