import React, { Component } from "react";
import Banner from "../components/Homebanner/banner"
import Champs from "../components/pastChampions/champs"
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Aux from "../hoc/Aux"
import "./style.css"

import champs from "../info.json"

class Home extends Component {
  state = {
    champions: champs
  }

  // componentDidMount(){
  //   console.log(champs)
  // }


  render() {


    let champions = this.state.champions.map(champ => {
      return <Champs key={champ.id}
        year={champ.Year}
        name={champ.Champion}
        mvp={champ.MVP}
        otherPLayers={champ.OtherNotablePayers}
        score={champ.ChampionShipScore}
        blurb={champ.Blurb}
        record = {champ.Record}
        // gif = {champ.gif} 
        />

    })


    return (
      <Aux>
        <Banner></Banner>
        <div className="championShipDiv">
          {champions}
        </div>
      </Aux>

    );
  }
}





export default Home;