import React from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function App() {
  return (
    <>
      <Link to="/feed">
        <header >
          <Button className="topNav" color="secondary">
            <i className="fab fa-earlybirds"></i>
            </Button>
        </header>
      </Link>
      <Main />
      <Footer />
    </>
  );
}

export default App;
