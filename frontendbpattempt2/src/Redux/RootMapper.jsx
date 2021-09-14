
import {combineReducers} from 'redux'
import mapper from "./mapper";


const RootMapper = combineReducers({status: mapper})

export default RootMapper