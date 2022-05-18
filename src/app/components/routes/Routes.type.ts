import { DashboardRouteType } from "../pages/dashboard/Dashboard.types";
import { ErrorStatusEnum } from "app/type-definition/enums/statusCode";

export type pathTypes = '/login' | '/' | `/${ErrorStatusEnum}` 


export type RoutesType = {
    [key:string]:{
        path: `/${pathTypes}`,
        component: React.FC,
        exact: boolean,
        routes: DashboardRouteType | null,
    }
};

