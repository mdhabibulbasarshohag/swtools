import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="container mx-auto">
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;