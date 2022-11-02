// redux is like a central data store. It is available throughout the applications
//we'll be having the whole data store into this file
// redux toolkit allows to create slices of the redux state
import { configureStore, createSlice } from "@reduxjs/toolkit"

// authentication slice
const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedIn: false
    },
    reducers:{
        login(state){
            state.isLoggedIn =  true
        },
        logout(state){
            state.isLoggedIn =  false
        },
    }
});
// specify the action creaters -  login,logout
export const authActions = authSlice.actions 

// export the reducer functions of the store which will handle the state of the redux
export const store = configureStore({
    // has a reducer property which we have to specify. If more than one place them in an object
    reducer: authSlice.reducer
})