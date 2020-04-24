import React, { useState, useEffect } from "react";
import Chirp from "./Chirp";
import { getAllChirps } from "../services/api-helper";
import "../App.css";

function Feed() {
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllChirps();
      setChirps(
        resp.map((chirp, index) => {
          return <Chirp key={index} chirp={chirp} />;
        })
      );
    };
    makeAPICall();
  }, []);

  return (
    <>
      <ul>{chirps}</ul>
      <br />
      <br />
    </>
  );
}

export default Feed;
