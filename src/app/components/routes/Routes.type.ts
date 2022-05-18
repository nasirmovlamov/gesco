import { ErrorStatusEnum } from "app/type-definition/enums/statusCode";
import { HomeRouteType } from "../pages/home/Home.types";



export type pathTypes = '/login' | '/' | `/${ErrorStatusEnum}` 


export type RoutesType = {
    [key:string]:{
        path: `/${pathTypes}`,
        component: React.FC,
        exact: boolean,
        routes: HomeRouteType | null,
    }
};

