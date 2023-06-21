import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import './slide.scss';
import { allCars } from "../dialog/data";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Slide=()=>{
    var settings = {
        dots: false,  
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
      };
    
    const details=useSelector((detail)=>detail.allDetail.allCarDetails);
    console.log('details',details);
    const navigate=useNavigate()

    const showDetail = (index) =>{
        navigate('/detail/'+index)
    }
    
    return(
    <div className="slide-container">
        <div className="slide-head">

        </div>
        <div className="slides">
        <Slider {...settings}>
            {details.map((value,index)=>{
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
    )
}
export default Slide;