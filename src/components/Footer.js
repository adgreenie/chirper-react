import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Button, UncontrolledPopover, PopoverBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ChirpForm from "./ChirpForm";
import { AppContext } from "../App";
import "../App.css";

function Footer() {
    const app = useContext(AppContext);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <footer className="bottomNav">
            <Navbar className="footer-nav" color="secondary" light>
                <NavItem>
                    <Link to="/login">
                        <i className="fas fa-sign-in-alt"><span className="loginText"> Click here to Login </span></i>
                    </Link>
                </NavItem>
                <Button id="Popover1" type="button">
                    <i className="fas fa-play"><span className="playSymbolText"> Click here to chirp </span>
                        <UncontrolledPopover
                            trigger="legacy"
                            placement="top"
                            isOpen={popoverOpen}
                            target="Popover1"
                            toggle={toggle}
                        >
                            <PopoverBody>
                                <ChirpForm />
                            </PopoverBody>
                        </UncontrolledPopover>
                    </i>
                </Button>
                <NavItem>
                    <Link to="/feed">
                        <i className="footer-logo fab fa-earlybirds"><span className="feedBirdText">Live Feed</span></i>
                    </Link>
                </NavItem>
                {app.user && (
                    <NavItem>
                        <Link to={`/user/${app.user}`}>
                            <i className="fas fa-users" />
                        </Link>
                    </NavItem>
                )}
            </Navbar>
        </footer>
    );
}

export default Footer;
