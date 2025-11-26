import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home/Home/Home';
import Layout from '../Layoyt/Layout';
import Register from '../Pages/Auth/Register/Register';
import Login from '../Pages/Auth/Login/Login';
import PrivateRoute from '../context/PrivateRoute/PrivateRoute';
import AddIssue from '../Pages/AddIssue/AddIssue';
import AllIssues from '../Pages/AllIssues/AllIssues';
import PostDetails from '../Pages/PostDetails/PostDetails';
import MyIssues from '../Pages/MyIssues/MyIssues';
import MyContribution from '../Pages/MyContribution/MyContribution';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "addissue",
                element: <PrivateRoute><AddIssue></AddIssue></PrivateRoute>
            },
            {
                path: "AllIssues",
                element: <AllIssues></AllIssues>
            },
            {
                path: "/posts/:id",
                element: <PrivateRoute> <PostDetails></PostDetails></PrivateRoute>
            },
            {
                path: "myIssues",
                element: <PrivateRoute><MyIssues></MyIssues></PrivateRoute>
            },
            {
                path: "myContribution",
                element: <PrivateRoute><MyContribution></MyContribution></PrivateRoute>
            }

        ]
    },
    {
        path: "Register",
        Component: Register
    },
    {
        path: "login",
        Component: Login
    },
    {
        path:"*",
        Component:PageNotFound
    }


]);

export default router;