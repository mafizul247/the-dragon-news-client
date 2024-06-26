import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../Layout/NewsLayout';
import News from '../pages/News/News/News';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import About from '../pages/About/About';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://the-news-dragon-server-chi-lemon.vercel.app/category/0')
            },
            {
                path: 'category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-chi-lemon.vercel.app/category/${params.id}`)
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-chi-lemon.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'sign-up',
        element: <SignUp />
    }
]);

export default router;