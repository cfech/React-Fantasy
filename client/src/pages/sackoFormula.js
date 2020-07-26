import React from "react"
import "./style.css"

function Formula() {
    return(
        <>
         <section className="row">
                <div className="col-md-8 offset-md-2 col-xs-12 mt-4 card">



                    <table className="light col-sm-12 myTable1">
                        <tr className="tableHead">
                            <th className="tg-0lax">Team</th>
                            <th className="tg-0lax liPF">PF</th>
                            <th className="tg-0lax">Standings</th>
                            <th className="tg-0lax">High Points Ranking</th>
                            <th className="tg-0lax">200 Pt Games(-1)</th>
                            <th className="tg-0lax">Sub 100 Pt Games(+1)</th>
                            <th className="tg-0lax">High Points Week(-1)</th>
                            <th className="tg-0lax liM">Miscellaneous</th>

                            <th className="tg-0lax">=</th>

                            <th className="tg-0lax">Total</th>
                            <th className="tg-0lax liR">Rank</th>

                        </tr>
                        <tr className="tableP">
                            <td className="tg-0lax tableS">Connor</td>
                            <td className="tg-0lax tableS">2 </td>
                            <td className="tg-0lax tableS">1 </td>
                            <td className="tg-0lax tableS">2  </td>
                            <td className="tg-0lax tableS">-1 </td>
                            <td className="tg-0lax tableS">0 </td>
                            <td className="tg-0lax tableS">- 5 </td>
                            <th className="tg-0lax tableS">0</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax">-1</td>
                            <td className="tg-0lax tableS">1</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Dan</td>
                            <td className="tg-0lax tableS">1 </td>
                            <td className="tg-0lax tableS">3 </td>
                            <td className="tg-0lax tableS">1  </td>
                            <td className="tg-0lax tableS">-2 </td>
                            <td className="tg-0lax tableS">0 </td>
                            <td className="tg-0lax tableS">- 4 </td>
                            <th className="tg-0lax tableS">2*</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">1</td>
                            <td className="tg-0lax tableS">2</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Alec</td>
                            <td className="tg-0lax tableS">3 </td>
                            <td className="tg-0lax tableS">2 </td>
                            <td className="tg-0lax tableS">4  </td>
                            <td className="tg-0lax tableS">-1 </td>
                            <td className="tg-0lax tableS">2 </td>
                            <td className="tg-0lax tableS">- 2 </td>
                            <th className="tg-0lax tableS">0</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">8</td>
                            <td className="tg-0lax tableS">3</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Hirschman</td>
                            <td className="tg-0lax tableS">5 </td>
                            <td className="tg-0lax tableS">4 </td>
                            <td className="tg-0lax tableS">3  </td>
                            <td className="tg-0lax tableS">-1 </td>
                            <td className="tg-0lax tableS">2 </td>
                            <td className="tg-0lax tableS">- 1 </td>
                            <th className="tg-0lax tableS">0</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">12</td>
                            <td className="tg-0lax tableS">4</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Andreas</td>
                            <td className="tg-0lax tableS">4 </td>
                            <td className="tg-0lax tableS">5 </td>
                            <td className="tg-0lax tableS">7  </td>
                            <td className="tg-0lax tableS">0 </td>
                            <td className="tg-0lax tableS">1 </td>
                            <td className="tg-0lax tableS">0 </td>
                            <th className="tg-0lax tableS">0</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">17</td>
                            <td className="tg-0lax tableS">5</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Gabe</td>
                            <td className="tg-0lax tableS">7 </td>
                            <td className="tg-0lax tableS">7 </td>
                            <td className="tg-0lax tableS">5  </td>
                            <td className="tg-0lax tableS">0 </td>
                            <td className="tg-0lax tableS">1 </td>
                            <td className="tg-0lax tableS">- 1 </td>
                            <th className="tg-0lax tableS">0</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">19</td>
                            <td className="tg-0lax tableS">6</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Vito</td>
                            <td className="tg-0lax tableS">6 </td>
                            <td className="tg-0lax tableS">6 </td>
                            <td className="tg-0lax tableS">8  </td>
                            <td className="tg-0lax tableS">0 </td>
                            <td className="tg-0lax tableS">1 </td>
                            <td className="tg-0lax tableS">-1 </td>
                            <th className="tg-0lax tableS">2*</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">22</td>
                            <td className="tg-0lax tableS">7</td>
                         
                        </tr>
                        <tr className="tableS">
                            <td className="tg-0lax tableS">Ethan</td>
                            <td className="tg-0lax tableS">8 </td>
                            <td className="tg-0lax tableS">8 </td>
                            <td className="tg-0lax tableS">6  </td>
                            <td className="tg-0lax tableS">0 </td>
                            <td className="tg-0lax tableS">1 </td>
                            <td className="tg-0lax tableS">0 </td>
                            <th className="tg-0lax tableS">0</th>
                            <td className="tg-0lax ">= </td>
                            <td className="tg-0lax ">23</td>
                            <td className="tg-0lax tableS">8</td>
                         
                        </tr>
                    </table>
                   <p className="asterisk"> data from my spreadsheet <br/> * Penalty for Collusion</p>
                 

                    </div>
              </section>
              <section className="row rules">
                <div className="col-md-8 offset-md-2 col-xs-12 mt-4 card">
                    <h1 className="explanation">Sacko Formula Explanation</h1>
                    <ul className="rulesList">
                        <li className = "rulesLI">
                            Lower the score the better, The highest score (Rank 8) = Sacko
                        </li>
                        <li className = "rulesLI">
                            Total = PF + Standings + High Points Rankings - # of 200 + pt weeks + # of Sub 100 pt weeks - # of High point weeks + Miscellaneous= Total
                        </li>
                        <li className = "rulesLI">
                            PF = Total Points by team for the year, the team that had the most PF over the year gets pf = 1 , the team with the least amount gets pf = 8
                        </li>
                        <li className = "rulesLI">
                            Standings = final standings of the year, team in 1st gets value = 1, team in last gets value = 8.
                        </li> 
                        <li className = "rulesLI">
                            High points rankings, measures ceiling = take every teams high score of they year, team that got the highest overall points (highest ceiling) = 1 team that got the lowest personal high score of the year (lowest ceiling) = 8, see high points table
                        </li>
                        <li className = "rulesLI">
                           # of 200 point games = if a team got over 200 points in a week, a bonus of -1 is applied. ex: = 3 200+ pt weeks = -3
                        </li>
                        <li className = "rulesLI">
                            # of sub 100 point games = if a team scored lower than 100 points in a week, a penalty of +1 is applied. ex 3 sub 100 pt weeks = +3
                        </li>
                        <li className = "rulesLI">
                           # of high point weeks = if a team had the high points of the week in the league a bonus of -1 if applied. ex 3 high point weeks = -3
                        </li>
                    <li className = "rulesLI">
                        Miscellaneous = any penalties or bonuses that need to be applied. Ex of penalty = collusion, drop trades after trade deadline, anything to compromise the integrity of the league. 
                    </li>
                    </ul>


                </div>
              </section>
        </>
    )
}

export default Formula