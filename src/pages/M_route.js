import React from "react";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Card from "./Card";
import {useRoutes, Navigate} from "react-router-dom"

export default function () {

    return useRoutes([
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/',
            element: <Navigate to = '/login' />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/card',
            element: <Card />
        }
    ])
}