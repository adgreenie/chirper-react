import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Feed";
import SignUp from "./SignUp";
import ChirpForm from "./ChirpForm";
import Userpage from "./Userpage";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import { withRouter } from "react-router";

function Main(props) {
  return (
    <>
      <main className="mobile">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" render={routerProps => <Login {...routerProps} />}/>
          <Route path="/create" component={ChirpForm} />
          <Route path="/feed" component={Feed} />
          <Route
            path="/user/:user"
            render={routerProps => <Userpage {...routerProps} />}
          />
        </Switch>
      </main>
      <section className="desktopContainer">
        <aside className='desktop'>
          <ChirpForm />
          {!props.user && <Login  {...props}/>}
        </aside>
        <aside className='desktop'>
          <Feed />
        </aside>
      </section>
    </>
  );
}

export default withRouter(Main);