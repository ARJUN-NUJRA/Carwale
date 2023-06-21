import { configureStore } from "@reduxjs/toolkit";
import allData from "../slice/slice";

export const stores=configureStore({
    reducer:{
        allDetail:allData
    }
})