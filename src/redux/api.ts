import axios from "axios"
import { connectionfailuer, connectionStart, connectionSuccess } from "./userReducer.ts"

export const fetchingData = async(dispatch,user)=>{
    dispatch(connectionStart())
    try {
        const res = await axios.post("http://localhost:8000/api/auth/login",user)
        dispatch(connectionSuccess(res.data))
        
    } catch (error) {
        console.log(error)
        dispatch(connectionfailuer())
    }
}