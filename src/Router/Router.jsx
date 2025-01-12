import { lazy, Suspense } from 'react';
import Loading from '../Components/Loading/Loading';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home/Home'));
const About = lazy(() => import('../Pages/About/About'));
const Tools = lazy(() => import('../Pages/Tools/Tools'));
const Blog = lazy(() => import('../Pages/Blog/Blog'));
import Layout from '../Layout/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return null;
        },
        errorElement: <div>Error loading this page!</div>,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "tools",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Tools />
                    </Suspense>
                ),
            },
            {
                path: "blog",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Blog />
                    </Suspense>
                ),
            },
        ],
    },
]);