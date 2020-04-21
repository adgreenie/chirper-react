import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import '../App.css'

function Footer() {
    return (
        <nav className="bottomNav">
            <Navbar color="secondary" light expand="md"  >
            <Link to="/create">
                <NavbarBrand href="/create"><i className="fas fa-play"></i></NavbarBrand>
            </Link>
            <NavbarBrand href="/users"><i className="fas fa-users"></i></NavbarBrand>
            <Link to="/signup">
                <NavbarBrand href="/signup"><i className="fas fa-sign-in-alt"></i></NavbarBrand>
            </Link>
            </Navbar>
        </nav>
    )
}

export default Footer;