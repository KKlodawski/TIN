import { Outlet, Link } from "react-router-dom";
import '../Stylesheet/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="Navbar">
                <Link to="/" className="navButton"> Strona główna </Link>
                <Link to="/b1" className="navButton"> b1 </Link>
                <Link to="/b2" className="navButton"> b2 </Link>
                <Link to="/b3" className="navButton"> b3 </Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;