import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const LogDeatils=()=>{

    const data=useSelector(({allDetail})=>allDetail)
    console.log(data);
    const params=useParams();
     const [state,setState]=useState([]);
    useEffect(()=>{
        var filteredBrands=[...data.allCarDetails].filter(value=>value.company===params.companyName)
        console.log("filter",filteredBrands);
        setState(filteredBrands)
    },[params])
    return(
        <div className="display-container">
            {state.map((value,index)=>{
                return(
                    <div className="display-card" key={index}>
                       <div className="display-image">
                          <img src={value.image}></img>
                        </div>
                        <div className="display-content">
                           <h3>MODEL:{value.model}</h3>
                           <p>PRICE:{value.prize}</p>
                           <p>VARIANT:{value.fuel_type}</p>
                           <p>MILEAGE:{value.mileage}</p>
                        </div>
                    </div>
                )
            })

            }

        </div>
    )
}

export default LogDeatils;