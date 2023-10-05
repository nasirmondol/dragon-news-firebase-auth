import { createBrowserRouter } from "react-router-dom";
import Layout from "../Root/Layout";
import Home from "../Pages/Home/Home";
import ErrorElement from "../Pages/ErrorElement";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default routes;