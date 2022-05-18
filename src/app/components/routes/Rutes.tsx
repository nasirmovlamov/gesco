import { Home } from "app/components/pages/home";
import { HomeRoutes } from "../pages/home/Home.routes";
import { Login } from "../pages/login/Login";

export const gescoRoutes = {
    Home: {
        path: '/',
        component: Home,
        exact: true,
        permission:'',
        routes:HomeRoutes
    },
    Login: {
        path: '/login',
        component: <Login/>,
        exact: true,
        permission:'',
        routes:null
    }
}