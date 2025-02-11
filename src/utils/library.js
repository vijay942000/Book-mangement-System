//c
import {configureStore} from "@reduxjs/toolkit"   ;
import listReducer from "./listSlice.js"
//Here, listReducer is just a variable name we assign to the default export (cartSlice.reducer).
//import { listSlice } from "./cartSlice.js";  // Now this works
//const listtReducer = list.reducer;  Extract reducer

const library =configureStore({
    reducer:{
        list:listReducer,
    },
});

export default library;
