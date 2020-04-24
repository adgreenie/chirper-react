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
            <Navbar color="secondary" light expand="md">
                <div className="mobile">
                    <NavItem>
                        <Link to="/login">
                            <i className="fas fa-sign-in-alt" />
                        </Link>
                    </NavItem>
                </div>
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
                <div className="mobile">
                    <NavItem>
                        <Link to="/feed">
                            <i className="footer-logo fab fa-earlybirds"></i>
                        </Link>
                    </NavItem>
                </div>
                {app.user && (
                    <NavItem>
                        <Link to={`/user/${app.user.username}`}>
                            <i className="fas fa-users" />
                        </Link>
                    </NavItem>
                )}
            </Navbar>
        </footer>
    );
}

export default Footer;
