import { Content } from "app/components/layout/content/Content";
import { DashboardRouteType } from "./Dashboard.types";
import { ProtectedRoute } from "app/components/routes/ProtectedRoute";

export const DashboardRoutes:DashboardRouteType = {
    UserList:{
        path: "users/index",
        component: <ProtectedRoute> <Content/> </ProtectedRoute>,
        exact: true,
        permissionKey: "permission:users-index",
    },
    UserCreate:{
        path: "users/create",
        component: <ProtectedRoute> <Content/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:users-create",
    }, 
    UserId :
    {
        path: "users/:id",
        component: <ProtectedRoute> <Content/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:users-show",
    }, 
    RoleList:{
        path: "roles/list",
        component: <ProtectedRoute> <Content/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:roles-index",
    },
    RoleCreate:{
        path: "roles/create",
        component: <ProtectedRoute> <Content/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:roles-create",
    },
    RoleId:{
        path: "roles/:id",
        component: <ProtectedRoute> <Content/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:roles-show",
    }
}
