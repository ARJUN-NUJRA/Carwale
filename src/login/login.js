import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SignIn from './sigin';

//firebase
import { useState ,useEffect} from 'react';
import { uid } from 'uid';
import { set, ref,onValue} from 'firebase/database';
import { db } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setLoginAuthentication } from '../slice/slice';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
const dispatch=useDispatch();
    const [state,setState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
       
      });

    const [getDetails, setDetails] = useState([]);

    const [flag, setFlag] = useState(false);
    
      useEffect(()=>{
        const getValues=async()=>{
          await onValue(ref(db,"forms"),(snapshot)=>{
            const data=snapshot.val();
            if (data !== undefined){
                setDetails(Object.values(data))
            }
            console.log(data)
          })
      }
          getValues()
      },[])
       console.log(getDetails);
      function handleChange(e){
         if(e.target.name==="firstName"){
            setState({...state,firstName:e.target.value})
          }
          if(e.target.name==="lastName"){
            setState({...state,lastName:e.target.value})
          }
          if(e.target.name==="email"){
            setFlag(false)
            setState({...state,email:e.target.value})
          }
          if(e.target.name==="password"){
            setState({...state,password:e.target.value})
          }
          
      }

      const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    

    var alldetails = getDetails;
    var isAthend = alldetails.some((e) => e.email === data.get("email"))

    if (isAthend){
        setFlag(true)
    }else{
        setFlag(false)
        const formId=uid();
        set(ref(db,"forms/"+formId),{
            firstName:state.firstName,
            lastName:state.lastName,
            email:state.email,
            password:state.password,
          
        })
    }
    if(state.firstName!==""&&state.lastName!==""&&state.email!==""&&state.password!==""&&!isAthend){
        dispatch(setLoginAuthentication(false))
    }
  };
   

    

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 onChange={handleChange}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField  onChange={handleChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                //   autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={handleChange}
                  required
                  fullWidth
                  id="email"
                  type='email'
                  label="Email Address"
                  name="email"
                //   autoComplete="email"
                />
              </Grid>
              {flag && (<p style={{color: "red", paddingLeft: "16px"}}>Email is already registered</p>)}
              <Grid item xs={12}>
                <TextField onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                //   autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/"  variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}