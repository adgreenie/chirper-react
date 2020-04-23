import React from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Login from "./components/Login";

function App(props) {
  
  return (
    <div>
      <Link to="/feed">
        
        <header >
          <Button className="topNav" color="secondary">
            <i className="fab fa-earlybirds"></i>
            </Button>
        </header>
        < Login/>
      </Link>
      <Main />
      <Footer />
      </div>
  );
}

export default App;
