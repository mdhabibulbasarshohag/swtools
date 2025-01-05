import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Tools from '../Pages/Tools/Tools';
import Blog from '../Pages/Blog/Blog';

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
                element: <About />,
            },
            {
                path: "tools",
                element: <Tools />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ]
    }
]);