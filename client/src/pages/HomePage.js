import React from "react";
import Banner from "../components/Homebanner/banner"
import Champs from "../components/pastChampions/champs"
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import "./style.css"

function Home() {
  return (
    <>
      <Banner></Banner>

      <div className="championShipDiv">
        <Champs />
        <Champs />
        <Champs />
      </div>

    </>
  );
}

export default Home;