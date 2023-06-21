import React, { useState } from "react";
import "./logo.scss"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {allCars} from "../dialog/data"
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
const Logo=()=>{
    var settings = {
        dots: false,  
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
      };
      const showDetail = (index) =>{
        navigate('/detail/'+index)
    }
    const details=[{image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=75",
    company:"Maruti suzuki"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75",
                 company:"Tata"},
                {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=75",
                company:"Mahindra"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75",
                 company:"Hyundai"},
                {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=75",
                company:"Toyota"},
            {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=75",
            company:"BMW"}]
            const data=useSelector(({allDetail})=>allDetail)
            const [car,changecar]=useState([]);
         const navigate=useNavigate()
            const valueGet=(company)=>{
                navigate("/logo/"+company)
            }
          const Arjun=(siv)=>{console.log(allCars)
            let h=allCars.filter((e)=>parseInt(e.prize.slice(1,e.prize.length))<siv)
            changecar(h)
        }
    return(
        <>
        <div className="logo-container">
                {details.map((value,index)=>{
                    return(
                        <div className="logo" key={index} onClick={()=>valueGet(value.company)}>
                        <img src={value.image} alt="no img found"></img>   </div>
                    )
                })}
        </div>
        <div className='price-container'>
         <h1>Find The Cars Of Your Choice</h1>
         <div className='price-1'>
         <div className='price-box'>
            <p onClick={()=>{Arjun(7)}}>Under 7 Laks</p>
            <p onClick={()=>{Arjun(8)}}>Under 8 Laks</p>
            <p onClick={()=>{Arjun(9)}}>Under 9 Laks</p>
            <p onClick={()=>{Arjun(10)}}>Under 10 Laks</p>
            </div>
            <div className='price-box'>
            <p onClick={()=>{Arjun(15)}}>Under 15 Laks</p>
            <p onClick={()=>{Arjun(20)}}>Under 20 Laks</p>
            <p onClick={()=>{Arjun(25)}}>Under 25 Laks</p>
            <p onClick={()=>{Arjun(20)}}>Under 30 Laks</p>

            
        </div>
         </div>

    </div>
    <div>

    </div>
     <div>
     <div className="slides">
        <Slider {...settings}>
            {car.map((value,index)=>{
                    return(
                        <div className="slide1" key={index}>
             <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={value.image}
                    onClick={()=>showDetail(index)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" className="card-title"  onClick={()=>showDetail(index)} component="div">
                    {value.model}
                    </Typography>
                    <Typography variant="body2" className="card-price" >
                    {value.prize}
                    </Typography>
                    <Typography variant="body2" className="card-avg" >
                    Avg. Ex-Showroom price
                    </Typography>
                </CardContent>
             </Card>
            </div>
                    )
                })
            }
    </Slider>
      </div>
     </div>
        </>
    )
}

export default Logo;