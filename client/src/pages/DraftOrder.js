import React, { useState } from 'react';
import "./style.css"
function DraftOrder() {
var count = 0
const [peopleArray, setPeopleArray] = useState([])

const[previousArray, setPreviousArray]= useState({})

const getRandomDraftOrder = () => {
    console.log("clicked")
    var members = ["Connor", "Dan", "Evan", "Gabe", "Ethan", "Vito", "Alec"]
    var newArr = members.slice()
    console.log("getRandomDraftOrder -> newArr", newArr)
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    setPeopleArray(newArr)
} 




// const addHistory = (b) =>{
//     var oldListDiv = document.createElement("div")
//     let oldList = document.createElement("ol")
//     let hr = document.createElement("hr")
//     count++
//     for (let i = 0; i < b.length; i++) {
//         let name = document.createElement("li")
//         name.textContent = b[i]
//         oldList.append(name)
//     }
   
//     oldListDiv.append(count, hr, oldList )
//     historyList.prepend(oldListDiv)

// }


  return (
      <div>
    <div className="jumbotron jumbotron-fluid ">
        <div className="container">
            <h1 className="display-4 jH1">Random Draft Order Generator</h1>
        </div>
    </div>

    <div className="row justify-content-center">
        <div className="col-10 listCol">
            <h3>Name</h3>
            <button onClick={getRandomDraftOrder} id="randomBTN">Click to generate draft order</button>
            <ol>
{peopleArray.map((item) => (
<li className="do" key = {item}>{item}</li>
)
)}

            </ol>
        </div>
    </div>

    <div className="row justify-content-center">
        <div className="col-10 History">
            <h3 className = "historyH3">History</h3>
            
            <div id="oldList"></div>
        </div>
    </div>
    </div>
  );
}

export default DraftOrder;