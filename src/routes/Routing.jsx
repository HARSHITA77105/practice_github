import React from 'react';
import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard'
// import { BrowserRouter } from 'react-router-dom';

 const Routing = ()=>{

    return(
        <>
        {/* <BrowserRouter> */}
        <Routes>
            <Route path = "/" element = {<Dashboard/>}/>


        </Routes>
        {/* </BrowserRouter> */}
        </>
    )
}

export default Routing;