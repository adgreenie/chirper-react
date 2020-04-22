import React from "react";
import { Navbar, Button, Nav, NavbarBrand, Col, Form, Label, Input, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Feed";
import SignUp from "./SignUp";
import ChirpForm from "./ChirpForm";
import Userpage from "./Userpage"
import { Route, Link } from "react-router-dom";
import '../App.css'

function Main() {
  return (
    <main>
      {/* <div className="tablet">
          <Col>
              <Form>
                  <FormGroup>
                      <Label for="exampleEmail">Chirp Away</Label>
                      <Input type="text" name="email" id="exampleEmail" placeholder="Name of Chirp" />
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleText"></Label>
                      <Input type="textarea" name="text" id="exampleText" placeholder="Chirp Here" />
                  </FormGroup>
                  <Button color="warning">Chirp IT out</Button>{' '}
              </Form>
          </Col>
      </div> */}
      {/* <ChirpForm /> */}
      <section>
        <Route exact path="/feed" component={Feed} />
        {/* <Route exact path="/create" component={ChirpForm} /> */}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/userpage" component={Userpage} />
      </section>
    </main>
  )
}

export default Main;