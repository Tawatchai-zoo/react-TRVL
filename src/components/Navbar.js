import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const [button, setbutton] = React.useState(true);
    const [navbar, setNavbar] = React.useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false);
        } else {
            setbutton(true);
        }
    };

    window.addEventListener("resize", showButton);
    // console.log('render')

    React.useEffect(() => {
        showButton();
        // console.log('useEffect')
    }, []);

    const checkBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", checkBackground);

    return (
        <>
            {/* <nav className={navbar ? "navbar active" : "navbar"}> */}
            <nav className={navbar ? 'navbar active': 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGH UP</Button>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
