import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice";


// const rootReducer = combineReducers({
//     auth: authslice,

// })

const store = configureStore({
    reducer:{
        auth:authslice
    }
});
export default store;