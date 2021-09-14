const initialState = "LOGOUT"

const mapper = (state=initialState, action) =>{

    switch(action.type){
        
        case "LOGIN":
            return "LOGIN"


        case "LOGOUT":
            return "LOGOUT"

        default: return "LOGOUT"
    }
}



export default mapper