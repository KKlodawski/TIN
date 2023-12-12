import { Outlet, Link } from "react-router-dom";
import '../Stylesheet/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="Navbar">
                <Link to="/" className="navButton"> Strona główna </Link>
                <Link to="/phonelist" className="navButton"> Lista Telefonów </Link>
                <Link to="/phoneAdd" className="navButton"> Dodaj telefon </Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;