import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setCar2,setSecondCarAuthendication } from '../slice/slice';

export default function SelectVariants2() {
  const [age, setAge] = React.useState('hello');

const dispatch=useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(setCar2(event.target.value))
    dispatch(setSecondCarAuthendication(true))
  };

  return (
    
    <div className='popup'>
      <FormControl className='pop' variant="standard"  sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label"><img width={'16%'} src={require("./icons/icon-1.jpg")}/>Maruti suzuki</InputLabel>
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={"Brezza"}>Brezza</MenuItem>
          <MenuItem value={"Grand-vitara"}>Grand-vitara</MenuItem>
          <MenuItem value={"swift"}>swift</MenuItem>
          <MenuItem value={"Baleno"}>Baleno</MenuItem>
          <MenuItem value={"Ertiga"}>Ertiga</MenuItem>
        </Select>
        </FormControl><br></br>
        <FormControl  className='pop' variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label"><img width={'17%'} src={require("./icons/icon-2.jpg")}/>Tata</InputLabel>
       
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          // label="Age"
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={"Nexon"}>Nexon</MenuItem>
          <MenuItem value={"Punch"}>Punch</MenuItem>
          <MenuItem value={"Harrier"}>Harrier</MenuItem>
          <MenuItem value={"Altroz"}>Altroz</MenuItem>
          <MenuItem value={"safari"}>safari</MenuItem>
        </Select>
      </FormControl><br></br>
      <FormControl className='pop' variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label"><img width={'17%'} src={require("./icons/icon-3.jpg")}/>Toyota</InputLabel>
       
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
         
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={"Innova Hycross"}>Innova Hycross</MenuItem>
          <MenuItem value={"Fortuner"}>Fortuner</MenuItem>
          <MenuItem value={"Glanza"}>Glanza</MenuItem>
          <MenuItem value={"Urban cruiser"}>Urban cruiser</MenuItem>
          <MenuItem value={"Lnad cruiser"}>Lnad cruiser</MenuItem>
        </Select>
      </FormControl><br></br>
      <FormControl className='pop' variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label"><img width={'17%'} src={require("./icons/icon-6.jpg")}/>BMW</InputLabel>
       
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          
        >
          <MenuItem value="">
            
          </MenuItem>
          <MenuItem value={"BMW X1"}>BMW X1</MenuItem>
          <MenuItem value={"BMW 3 Series"}>BMW 3 Series</MenuItem>
          <MenuItem value={"BMW Z4"}>BMW Z4</MenuItem>
          <MenuItem value={"BMW 3 Series Gran Limousine"}>BMW 3 Series Gran Limousine</MenuItem>
          <MenuItem value={"BMW 5 Series"}>BMW 5 Series</MenuItem>
        </Select>
      </FormControl><br></br>
      <FormControl className='pop' variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label"><img width={'17%'} src={require("./icons/ticon-5.jpg")}/>Mahindra</InputLabel>
       
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
         onChange={handleChange}
         
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={"Mahindra Thar"}>Mahindra Thar</MenuItem>
          <MenuItem value={"Mahindra Scorpio"}>Mahindra Scorpio</MenuItem>
          <MenuItem value={"Mahindra XUV700"}>Mahindra XUV700</MenuItem>
          <MenuItem value={"Mahindra Scorpio N"}>Mahindra Scorpio N</MenuItem>
          <MenuItem value={"Mahindra XUV300"}>Mahindra XUV300</MenuItem>
        </Select>
      </FormControl><br></br>
      <FormControl className='pop' variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label"><img width={'17%'} src={require("./icons/icon-4.jpg")}/>Hyundai</InputLabel>
       
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={"Hyundai New Verna"}>Hyundai New Verna</MenuItem>
          <MenuItem value={"Hyundai Venue"}>Hyundai Venue</MenuItem>
          <MenuItem value={"Hyundai Creta"}>Hyundai Creta</MenuItem>
          <MenuItem value={"Hyndai Grand i10 Nios"}>Hyndai Grand i10 Nios</MenuItem>
          <MenuItem value={"Hyundai Verna"}>Hyundai Verna</MenuItem>
        </Select>
      </FormControl>
      
      
    </div>
  );
}