import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import  './table.scss';

export default function List(props) {
  
  
  console.log("props",props);
  

  return (
    <div className='container1'>
     <Typography sx={{ color: 'text.secondary' }} className='table-head'>Specification And Finance</Typography>
      <Accordion >
      
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ color: 'text.secondary' }}>Engine & Transmission</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Engine</TableCell>
                            <TableCell align="left">{props.car1.engine}</TableCell>
                            <TableCell align="left">{props.car2.engine}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Engine Type</TableCell>
                            <TableCell align="left">{props.car1.engine_type}</TableCell>
                            <TableCell align="left">{props.car2.engine_type}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Fuel Type</TableCell>
                            <TableCell align="left">{props.car1.fuel_type}</TableCell>
                            <TableCell align="left">{props.car2.fuel_type}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Max Power</TableCell>
                            <TableCell align="left">{props.car1.max_power}</TableCell>
                            <TableCell align="left">{props.car2.max_power}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Max Torque</TableCell>
                            <TableCell align="left">{props.car1.max_torque}</TableCell>
                            <TableCell align="left">{props.car2.max_torque}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Mileage</TableCell>
                            <TableCell align="left">{props.car1.mileage}</TableCell>
                            <TableCell align="left">{props.car2.mileage}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Driving Range</TableCell>
                            <TableCell align="left">{props.car1.driving_range}</TableCell>
                            <TableCell align="left">{props.car2.driving_range}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Drivertian</TableCell>
                            <TableCell align="left">{props.car1.drivetrain}</TableCell>
                            <TableCell align="left">{props.car2.drivetrain}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Transmission</TableCell>
                            <TableCell align="left">{props.car1.transmission}</TableCell>
                            <TableCell align="left">{props.car2.transmission}</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Emission Standard</TableCell>
                            <TableCell align="left">{props.car2.emission_standard}</TableCell>
                            <TableCell align="left">{props.car2.emission_standard}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="pane21bh-content" id="panel2bh-header">
          <Typography sx={{ color: 'text.secondary' }}>Dimension & Weight</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>length (mm)</TableCell>
                            <TableCell align="left">{props.car1.length}</TableCell>
                            <TableCell align="left">{props.car2.length}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">width ()mm</TableCell>
                            <TableCell align="left">{props.car1.width}</TableCell>
                            <TableCell align="left">{props.car2.width}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                    
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Height(mm)</TableCell>
                            <TableCell align="left">{props.car1.height}</TableCell>
                            <TableCell align="left">{props.car2.height}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Wheelbase(mm)</TableCell>
                            <TableCell align="left">{props.car1.wheelbase}</TableCell>
                            <TableCell align="left">{props.car2.wheelbase}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Grand Clearnace(mm)</TableCell>
                            <TableCell align="left">{props.car1.ground_clearance}</TableCell>
                            <TableCell align="left">{props.car2.ground_clearance}</TableCell>
                            <TableCell align="left"></TableCell>
                          
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ color: 'text.secondary' }}>Capacity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Doors</TableCell>
                            <TableCell align="left">{props.car2.doors}</TableCell>
                            <TableCell align="left">{props.car2.doors}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Seating Capacity</TableCell>
                            <TableCell align="left">{props.car1.seating_capacity}</TableCell>
                            <TableCell align="left">{props.car2.seating_capacity}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">No of Seating Rows</TableCell>
                            <TableCell align="left">{props.car1.number_of_seating}</TableCell>
                            <TableCell align="left">{props.car2.number_of_seating}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Bootspace</TableCell>
                            <TableCell align="left">{props.car1.Bootspace}</TableCell>
                            <TableCell align="left">{props.car2.Bootspace}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Fuel Tank Capacity</TableCell>
                            <TableCell align="left">{props.car1.Bootspace}</TableCell>
                            <TableCell align="left">{props.car2.Bootspace}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ color: 'text.secondary' }}>Suspensions, Breaks, Steering & Tyres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Front Suspension</TableCell>
                            <TableCell align="left">{props.car1.front_suspension}</TableCell>
                            <TableCell align="left">{props.car2.front_suspension}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Rear Suspension</TableCell>
                            <TableCell align="left">{props.car1.rear_suspension}</TableCell>
                            <TableCell align="left">{props.car2.rear_suspension}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Front Break Type</TableCell>
                            <TableCell align="left">{props.car1.front_break_type}</TableCell>
                            <TableCell align="left">{props.car2.front_break_type}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Rear Break Type</TableCell>
                            <TableCell align="left">{props.car1.rear_break_type}</TableCell>
                            <TableCell align="left">{props.car2.rear_break_type}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Minimum Turning Radius</TableCell>
                            <TableCell align="left">{props.car1.minimum_turning_Radius}</TableCell>
                            <TableCell align="left">{props.car2.minimum_turning_Radius}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Steering Type</TableCell>
                            <TableCell align="left">{props.car1.stearing_type}</TableCell>
                            <TableCell align="left">{props.car2.stearing_type}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Wheels</TableCell>
                            <TableCell align="left">{props.car1.wheels}</TableCell>
                            <TableCell align="left">{props.car2.wheels}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Spare Wheel</TableCell>
                            <TableCell align="left">{props.car1.sparewheel}</TableCell>
                            <TableCell align="left">{props.car2.sparewheel}</TableCell>
                            <TableCell align="left"></TableCell>
                           
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Front Tyres</TableCell>
                            <TableCell align="left">{props.car2.front_tyres}</TableCell>
                            <TableCell align="left">{props.car2.front_tyres}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Rear Tyres</TableCell>
                            <TableCell align="left">{props.car2.rear_tyres}</TableCell>
                            <TableCell align="left">{props.car2.rear_tyres}</TableCell>
                            <TableCell align="left"></TableCell>
                            
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
  }