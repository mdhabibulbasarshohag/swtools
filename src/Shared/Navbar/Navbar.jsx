import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full fixed bg-blue-500/10 backdrop-blur top-0 left-0 z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-4 md:px-0">
                    {/* Logo */}
                    <div>
                        <Link className="text-2xl font-bold" to="/">SWTools</Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-xl focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                    {/* Menu */}
                    <div
                        className={`${isMenuOpen ? "left-0" : " -left-full"} transition-all duration-300
                            } absolute md:static top-full  w-full md:w-auto md:flex md:items-center bg-blue-500/10 md:bg-transparent backdrop-blur md:backdrop-blur-none`}
                    >
                        <div className="">
                            <input
                                className="p-2 rounded-md border border-gray-300"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                        </div>

                        <ul className="flex flex-col md:flex-row gap-4 items-center p-4 md:p-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/tools">Tools</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;