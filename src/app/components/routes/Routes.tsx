import { BrowserRouter , Route, Routes as ReactRouterRoutes } from "react-router-dom";
import React from 'react'
import { gescoRoutes } from "./Rutes";
import { HomeRouteType, HomeRouteValueType } from "../pages/home/Home.types";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "app/components/pages/login/Login";
import { HomeRoutes } from "../pages/home/Home.routes";
import { useObjectValuesUtil } from "../hooks/useObjectValuesUtil";
import { Page404 } from "../pages/404/404";
import { Page401 } from "../pages/401/401";
import { Page403 } from "../pages/403/403";
import { Page500 } from "../pages/500/500";
import { Home } from "../pages/home";


export const Routes:React.FC = () => {
    const homeRoutes = useObjectValuesUtil(gescoRoutes.Home.routes);
    return (
        <BrowserRouter>
            <ReactRouterRoutes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>

                {
                    homeRoutes.map(
                        (route:HomeRouteValueType) => 
                        <Route path={route.path} element={route.component} caseSensitive={false}/>
                    )
                }
                
                <Route path={'/user-unauthorize'} element={<Page401/>}/>
                <Route path={'/forbidden'} element={<Page403/>}/>
                <Route path={'/server-error'} element={<Page500/>}/>

                <Route path={'*'} element={<Page404/>}/>
            </ReactRouterRoutes>
        </BrowserRouter>
   )
}