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
    <>
      <main className="mobile">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={ChirpForm} />
          {/* <Route path="/feed" component={Feed} /> */}
          <Route
            path="/user/:user"
            render={routerProps => <Userpage {...routerProps} />}
          />
        </Switch>
      </main>
      <aside className='desktop'>
        {/* <Feed /> */}
        <ChirpForm />
        <SignUp />
      </aside>
    </>
  );
}

export default Main;