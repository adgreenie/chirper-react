import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Feed";
import SignUp from "./SignUp";
import ChirpForm from "./ChirpForm";
import Userpage from "./Userpage";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";
import "../App.css";

function Main() {
  return (
    <main>
      <div className="tablet">
        <ChirpForm />
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/feed" component={Feed} />
        <Route path="/create" component={ChirpForm} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/user/:user"
          render={routerProps => <Userpage {...routerProps} />}
        />
      </Switch>
    </main>
  );
}

export default Main;