import React, { useEffect } from "react"
import './style.css'
import classes from './styles.modules.css'

function Champs(props) {
    let playerList = props.otherPLayers.map(player => {
        return <li>{player}</li>
    })

    // useEffect(() => {

    //     console.log(classes)
    // }, [])



    return (

        <div className="champDiv">
            <h1 className="h1year">{props.year}</h1>
            <hr />

            <div className="row nameRecord">
                <h3 className="NameH3">{props.name}</h3>
                <h3 className="RecordH3">{props.record}</h3>
            </div>

            <div className="row">
                <h3> MVP: {props.mvp}</h3>
            </div>

            <div className="row">
                <div className="col-5 mr-2">
                    <img src={props.gif} />
                </div>

                <div className="col-3 ml-1">
                    <h4> Notable Players</h4>
                    <ul className="PlayerList">
                        {playerList}
                    </ul>
                </div>
            </div>



            <div className="row">
                <h4>Score : {props.score}</h4>

            </div>

            <div className="row">
                <p>{props.blurb}</p>
            </div>
        </div>
    )
}

export default Champs

