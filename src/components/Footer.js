import React, { useState, useContext } from "react";
import { Navbar, NavItem, NavLink, Button, UncontrolledPopover, PopoverBody } from "reactstrap";
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
                <NavItem>
                    <NavLink href="/login">
                        <i className="fas fa-sign-in-alt" />
                    </NavLink>
                </NavItem>
                <Button id="Popover1" type="button">
                    <i className="fas fa-play">
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
                    <NavLink href="/feed">
                        <i className="footer-logo fab fa-earlybirds"></i>
                    </NavLink>
                </NavItem>
                {app.user && (
                    <NavItem>
                        <NavLink href={`/user/${app.user}`}>
                            <i className="fas fa-users" />
                        </NavLink>
                    </NavItem>
                )}
            </Navbar>
        </footer>
    );
}

export default Footer;
