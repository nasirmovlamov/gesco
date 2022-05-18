import { PathType } from "app/type-definition/types/pathes";
import { PermissionsType } from "app/type-definition/types/permissions";
import React, { ReactElement, ReactNode } from "react";

export type HomeRoutesType = 'users' | 'roles' | 'permission' 



export type PermissionedHomeRoutes = `permission:${HomeRoutesType}-${PermissionsType}`;
export type HomePathedRutesType = `/${HomeRoutesType}/${PathType}`;


    

export type HomeRouteType = {
    [key:string]:HomeRouteValueType
};

export type HomeRouteValueType = {
    path: HomePathedRutesType,
    component: any,
    exact: boolean,
    permissionKey: PermissionedHomeRoutes,
}


export type HomeProps = {};
