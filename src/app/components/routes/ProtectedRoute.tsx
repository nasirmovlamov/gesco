import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { HomePathedRutesType, HomeRouteType, HomeRouteValueType } from '../pages/home/Home.types';

export type ProtectedRouteProps = {
    children: React.ReactNode;
}


export const ProtectedRoute = ({children}:ProtectedRouteProps) => {
   
    return (
        <>
            {
                false ?  (
                    <Navigate 
                        to="/login" 
                        replace={true} />
                    )
                :
                (
                    children
                )
            }
        </>
    )
}