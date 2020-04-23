import React, { useState, createContext } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export const AppContext = createContext()

function App() {

  const [user, setUser] = useState('adam')

  return (
    <>
      <header>
        <Link to="/feed">
          <Button className="topNav" color="secondary">
            <i className="fab fa-earlybirds"></i>
          </Button>
        </Link>
      </header>
      <AppContext.Provider value={ {user, setUser} }>
        <Main />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;