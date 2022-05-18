import React from 'react'
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
    children: React.ReactNode;
}


export const ProtectedRoute = ({children}:ProtectedRouteProps) => {
   
    return (
        false ?  (
            <Navigate 
                to="/login" 
                replace={true} />
            )
        :
        (
            <>{children}</>
        )
    )
}