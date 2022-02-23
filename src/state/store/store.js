import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/reducers";


export default configureStore({
    reducer: {
        weather: weatherReducer
    }
})