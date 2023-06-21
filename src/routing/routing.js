import React from "react";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Choose from "../choose/choose";
import CustomizedDialogs from "../dialog/dialog";
import Footer from "../footer/footer";
import Nav from "../nav/nav";
import CustomizedAccordions from "../dialog/accordin";
import { Provider, useSelector } from "react-redux";
import { stores } from "../store/store";
import Home from "../home/home";
import Detail from "../detail/detail";
import LogDeatils from "../logo/logodetails";
import SignUp from "../login/login";
import SignIn from "../login/sigin";
 
const Routing=()=>{
  // const LoginAuthentication=useSelector((auth)=>auth.allDetail.loginAuthentication);
  // console.log('LoginAuthentication',LoginAuthentication);
    return(
        <div>
          {/* { LoginAuthentication ? 
          <BrowserRouter>
              <Routes>
                <Route  path={"/"} element={<SignIn />}></Route>
                <Route  path={"/signup"} element={<SignUp />}></Route>
                <Route path="*" element={<SignIn/>}/>
              </Routes>
          </BrowserRouter> */}
              :    
            <BrowserRouter>
            <Nav></Nav>
              <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route  path={"/choose"} element={<Choose />}></Route>
                <Route  path={"/detail/:index"} element={<Detail />}></Route>
                <Route  path={"/logo/:companyName"} element={<LogDeatils />}></Route>
                <Route path="*" element={<Home/>}/>
              </Routes>
            <Footer></Footer>
            </BrowserRouter>
          {/* } */}
        </div>
    )

}

const Main = () =>{
  return(
    <Provider store={stores}>
      <Routing/>
    </Provider>
  )
}
export default Main;