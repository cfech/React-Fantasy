import React from "react"
import './style.css'

function Champs(props) {
    return (

        <div className="champDiv">
            <h1 className="h1year">Year</h1>
            <hr />

            <div className="row nameRecord">
                <h3 className="NameH3">Name</h3>
                <h3 className="RecordH3">Record</h3>
            </div>

            <div className="row">
                <h3>mvp</h3>
            </div>

            <div className="row">
                <div className="col-5">
                    <img src={"https://via.placeholder.com/300x150"} />
                </div>
                <div className="col-5">
                    <ul>
                        <li>rest of team</li>
                    </ul>
                </div>
            </div>



            <div className="row">
                <h4>champion ship score</h4>

            </div>

            <div className="row">
                <p>blurb</p>
            </div>
        </div>
    )
}

export default Champs

