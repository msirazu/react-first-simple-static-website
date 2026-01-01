import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-5 justify-center items-center capitalize p-5">
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/contact'>contact</NavLink>
            <NavLink to='/blog'>blog</NavLink>
        </nav>
    );
};

export default Navbar;