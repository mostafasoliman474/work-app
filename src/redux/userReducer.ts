import { createSlice } from "@reduxjs/toolkit"
const userSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        connectionStart:(state)=>{
            state.isFetching=true;
        },
        connectionSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.error = false
        },
        connedctionFailure:(state)=>{
            state.isFetching=false
            state.error = true
        },
        logout:(state)=>{
            state.currentUser=null
        }
    }
})
export const {connectionStart,connedctionFailure,connectionSuccess,logout}=userSlice.actions;
export default userSlice.reducer;

