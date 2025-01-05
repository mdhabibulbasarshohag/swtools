import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <h1>About</h1>,
            },
            {
                path: "tools",
                element: <h1>tools</h1>,
            },
            {
                path: "blog",
                element: <h1>Blog</h1>,
            },
        ]
    }
]);