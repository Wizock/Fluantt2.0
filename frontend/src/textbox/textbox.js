import {React, useState} from 'react';

let bufferCounter = 0
let bufferArray = []

function TextBox_route(){
    const [displayData, SetdisplayData] = useState(0);
    const [counter, setCounter] = useState(0);
    const createTextBox=(e) => {
        bufferCounter += 1
        bufferArray.push(<textarea key={counter.toString()} id={counter} style={{"position": "absolute","left":`${e.screenX}px`, "top":`${e.screenY}px`}}></textarea>)
        bufferArray.map(data => <div>{data}</div>)
        console.log(bufferArray)
        SetdisplayData(bufferArray)
        setCounter(bufferCounter)
        console.log(bufferCounter)
        console.log(displayData)
    }
    
    return(
        <div style={{"height":"100vh","width":"100vw"}} onClick = {
            e => {createTextBox(e)}}>
        hello
        <div>
            {displayData}
        </div>
        </div>
    )
}


export default TextBox_route