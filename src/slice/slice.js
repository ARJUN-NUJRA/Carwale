import { createSlice } from "@reduxjs/toolkit";
import { allCars } from "../dialog/data";

const allData=createSlice({
    name:"carwale",
    initialState:{
        allCarDetails:allCars,
        car1:'Brezza',
        car2:'Brezza',
        firstCarAuthendication:false,
        secondCarAuthendication:false,
        loginAuthentication:true
    },
    reducers:{
        setCar1:(state,action)=>{
            state.car1=action.payload
        },
        setCar2:(state,action)=>{                        
            state.car2=action.payload
        },
        setFirstCarAuthendication:(state,action)=>{
            state.firstCarAuthendication=action.payload
        },
        setSecondCarAuthendication:(state,action)=>{
            state.secondCarAuthendication=action.payload
        },
        setLoginAuthentication:(state,action)=>{
            state.loginAuthentication=action.payload
        }
    }
})

export default allData.reducer;
export const {setCar1,setCar2,setFirstCarAuthendication,setSecondCarAuthendication,setLoginAuthentication}=allData.actions 