import React, { useState, useContext } from "react";
import {
  Navbar,
  NavItem,
  NavLink,
  Button,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";
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
          <NavLink href={`/user/${app.user}`}>
            <i className="fas fa-users" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">
            <i className="fas fa-sign-in-alt" />
          </NavLink>
        </NavItem>
      </Navbar>
    </footer>
  );
}

export default Footer;
