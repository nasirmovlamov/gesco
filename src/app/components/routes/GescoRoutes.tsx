import { DashboardRoutes } from "../pages/dashboard/Dashboard.routes";
import { Login } from "../pages/login/Login";

export const gescoRoutes = {
    Dashboard: {
        path: '/',
        component: null,
        exact: true,
        permission:'',
        routes:DashboardRoutes
    },
    Login: {
        path: '/login',
        component: <Login/>,
        exact: true,
        permission:'',
        routes:null
    }
}