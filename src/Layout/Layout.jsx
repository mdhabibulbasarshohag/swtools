import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header></header>
            <main className="container mx-auto">
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;