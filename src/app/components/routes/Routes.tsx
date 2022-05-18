import { AppDispatch, useAppDispatch } from "../store/store";
import { BrowserRouter, Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import React, { useEffect } from 'react'

import { APPLICATION_PATH } from "app/helpers/api/services/path";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "app/components/pages/login/Login";
import { Page401 } from "../pages/401/401";
import { Page403 } from "../pages/403/403";
import { Page404 } from "../pages/404/404";
import { Page500 } from "../pages/500/500";
import { loginThunk } from "../store/reducers/auth/Auth.thunk";
import {useDispatch} from 'react-redux'

export const Routes:React.FC = () => {
    // const dispatch = useAppDispatch()
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(loginThunk(null))
    }, [])
    

    return (
        <BrowserRouter>
            <ReactRouterRoutes>
                {
                    false ? 
                    <Route path="/*"  element={<Dashboard/>} />
                    :
                    <Route path="/"  element={<Login/>} />
                } 
                <Route path={APPLICATION_PATH.UNAUTHORIZED} element={<Page401/>}/>
                <Route path={APPLICATION_PATH.FORBIDDEN} element={<Page403/>}/>
                <Route path={APPLICATION_PATH.SERVER_ERROR} element={<Page500/>}/>
                <Route path={APPLICATION_PATH.LOGIN} element={<Navigate to="/"/>}/>
                {true &&  <Route path={'*'} element={<Page404/>}/>}
            </ReactRouterRoutes>
        </BrowserRouter>
   )
}