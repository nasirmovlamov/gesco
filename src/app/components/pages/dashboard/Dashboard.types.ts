import { PathType } from "app/type-definition/types/pathes";
import { PermissionsType } from "app/type-definition/types/permissions";
import React, { ReactElement, ReactNode } from "react";

export type DashboardRoutesType = 'users' | 'roles' | 'permission' 



export type PermissionedDashboardRoutes = `permission:${DashboardRoutesType}-${PermissionsType}`;
export type DashboardPathedRutesType = `${DashboardRoutesType}/${PathType}`;


    

export type DashboardRouteType = {
    [key:string]:DashboardRouteValueType
};

export type DashboardRouteValueType = {
    path: DashboardPathedRutesType,
    component: any,
    exact: boolean,
    permissionKey: PermissionedDashboardRoutes,
}


export type DashboardProps = {};
