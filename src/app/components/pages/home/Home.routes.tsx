import { ProtectedRoute } from "app/components/routes/ProtectedRoute";
import { Login } from "../login/Login";
import { HomeRouteType } from "./Home.types";

export const HomeRoutes:HomeRouteType = {
    UserList:{
        path: "/users/index",
        component: <ProtectedRoute> <Login/> </ProtectedRoute>,
        exact: true,
        permissionKey: "permission:users-index",
    },
    UserCreate:{
        path: "/users/create",
        component: <ProtectedRoute> <Login/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:users-create",
    }, 
    UserId :
    {
        path: "/users/:id",
        component: <ProtectedRoute> <Login/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:users-show",
    }, 
    RoleList:{
        path: "/roles/list",
        component: <ProtectedRoute> <Login/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:roles-index",
    },
    RoleCreate:{
        path: "/roles/create",
        component: <ProtectedRoute> <Login/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:roles-create",
    },
    RoleId:{
        path: "/roles/:id",
        component: <ProtectedRoute> <Login/> </ProtectedRoute> ,
        exact: true,
        permissionKey: "permission:roles-show",
    }
}
