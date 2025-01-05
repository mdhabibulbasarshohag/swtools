import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <div>
                <Link className="text-2xl font-bold" to="/">SWTools</Link>
            </div>
            <div className="">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;