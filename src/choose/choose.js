 import React, { useEffect, useState } from 'react';
import {Button, Card,CardContent, CardMedia, Typography } from '@mui/material';
import "./choose.scss"
import CustomizedDialogs1 from "../dialog/dialog";
import CustomizedDialog2 from '../dialog/car2dialog';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { setSecondCarAuthendication,setFirstCarAuthendication } from '../slice/slice';
import List from '../table/table';

 

function Choose() {

  const allDetail=useSelector(({allDetail})=>allDetail);
  const dispatch=useDispatch()
  

  const [firstCarDetails,changeFirstCarDetails]=useState('car1')
  const [secondCarDetails,changeSecondCarDetails]=useState('car2')

  console.log('firstCarDetails',firstCarDetails,'secondCarDetails',secondCarDetails)

  useEffect(()=>{
    var [filterdDetail1]=[...allDetail.allCarDetails].filter((value)=>{
      return value.model===allDetail.car1
    })
    changeFirstCarDetails(filterdDetail1)
    console.log('filterdDetail1',filterdDetail1);
  },[allDetail.car1])


   useEffect(()=>{
    var [filterdDetail2]=[...allDetail.allCarDetails].filter((value)=>{
      return value.model===allDetail.car2
    })
    changeSecondCarDetails(filterdDetail2)
    console.log('filterdDetail2',filterdDetail2,'');

  },[allDetail.car2])

  const [compare,setCompare]=useState(false);

  const buttonCheck=()=>{
    if(allDetail.firstCarAuthendication===true && allDetail.secondCarAuthendication===true){
      setCompare(true)
    }
}

  return (
    <section>
      <h1>Compare cars</h1>
      <p>CarWale brings you comparison of Honda City Hybrid eHEV and Honda New City. The Honda City Hybrid eHEV price is ₹ 18.92 Lakh and Honda New City price is ₹ 11.52 Lakh. The Honda City Hybrid eHEV is available in 1498 cc engine with 1 fuel type options: Hybrid (Electric + Petrol) 
        and Honda New City is available in 1498 cc engine with 1 fuel type options</p>
    <div className='car-container'>
      <div className="car-row" >

       {allDetail.firstCarAuthendication ? 
                <Card sx={{ maxWidth: 345 }} className='card'>
        <CardMedia
          component="img"
          height="140" 
          image={firstCarDetails.image}
          alt="green iguana" 
          className='image'/>
        <CardContent >
          <Typography gutterBottom variant="h6" className='card1' component="div">
            {firstCarDetails.company}
          </Typography>
          <Typography variant="h6" className='card2'>
          {firstCarDetails.model}
          </Typography>
          <Typography variant="body2" className='card3'>
          {firstCarDetails.prize}
          </Typography>
          <Typography variant="body2" className='card4'>
            Avg Ex ShowRoom Price
          </Typography>
          <Button variant="outlined" size="medium"  className='card5'>
          Get Offers
        </Button>
        </CardContent>
     
      <CloseIcon className="closeicon" onClick={()=> {dispatch(setFirstCarAuthendication(false)); setCompare(false)}}/>
    </Card>
    
    :
    <div className="car-box">      
            <CustomizedDialogs1/>
       </div>
    } 
      </div>

      <div className="car-row">
    
  {allDetail.secondCarAuthendication ? 
     <Card sx={{ maxWidth: 345 }}  className='card'>
          <CardMedia
            component="img"
            height="140"
            image={secondCarDetails.image}
            alt="green iguana" 
            className='image'/>
          <CardContent className='cardall'>
                <Typography gutterBottom variant="h6" className='card1' component="div">
                  {secondCarDetails.company}
                </Typography>
                <Typography variant="h6" className='card2' >
                {secondCarDetails.model}
                </Typography>
                <Typography variant="body2"className='card3' >
                {secondCarDetails.prize}
                </Typography>
                <Typography variant="body2" className='card4'>
                  Avg Ex ShowRoom Price
                </Typography>
                <Button variant="outlined" size="medium"  className='card5'>
                Get Offers
              </Button>
          </CardContent>
        <CloseIcon className="closeicon" onClick={()=> {dispatch(setSecondCarAuthendication(false));setCompare(false)}}/>
    </Card>
    :
    <div className="car-box">      
            <CustomizedDialog2/>  
    </div>   
    }
    
      </div>
     
    </div><br></br>
    <div className='compare-input'>
        <input type="button" value="compare" onClick={buttonCheck}></input>
    </div>

   {
    compare ? <List car1={firstCarDetails} car2={secondCarDetails}/> : null
   }
 
    
    </section>
  );
}

export default Choose;