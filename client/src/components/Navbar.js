
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    
    return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand nav-link rounded" href="index.html">Tim Winters</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/map" className={location.pathname === "/map" ? "nav-link active" : "nav-link"}>Map</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/signout" className={location.pathname === "/signout" ? "nav-link active" : "nav-link"}>Sign Out</Link>
                    </li>
                </ul>
        </nav>
    </header>
    )
}

export default Navbar

