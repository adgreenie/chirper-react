import React, { useState } from "react";
import { Navbar, NavbarBrand, Button, UncontrolledPopover, PopoverBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import '../App.css'
import ChirpForm from './ChirpForm'

function Footer() {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <nav className="bottomNav">
            <Navbar color="secondary" light expand="md"  >


                {/* <Link to="/create"> */}

                <Button
                    id="Popover1"
                    type="button"
                >
                    <i className="fas fa-play">
                        <UncontrolledPopover
                            trigger="legacy"
                            placement="top"
                            isOpen={popoverOpen}
                            target="Popover1"
                            toggle={toggle}
                        >
                            <PopoverBody>
                                {/* <NavbarBrand href="/create"> */}
                                <ChirpForm />
                                {/* </NavbarBrand> */}
                            </PopoverBody>
                        </UncontrolledPopover>
                    </i>
                </Button>

                {/* </Link> */}


                <NavbarBrand href="/users"><i className="fas fa-users"></i></NavbarBrand>
                <Link to="/signup">
                    <NavbarBrand href="/signup"><i className="fas fa-sign-in-alt"></i></NavbarBrand>
                </Link>
            </Navbar>
        </nav >
    )
}

export default Footer;