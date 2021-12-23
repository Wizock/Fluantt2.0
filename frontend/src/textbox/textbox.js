import {React, useState} from 'react';

let bufferCounter = 0
let bufferArray = []

function TextBox_route(){
    const [displayData, SetdisplayData] = useState(0);
    const [counter, setCounter] = useState(0);
    const createTextBox=(e) => {
        bufferCounter += 1
        let x = e.screenX;
        let y = e.screenY - 70;

        console.log(`x: ${e.screenX}, y: ${e.screenY}`)
        bufferArray.push(<textarea key={counter.toString()} id={counter} style={{"position": "absolute","left":`${x}px`, "top":`${y}px`}}></textarea>)
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

            <div>
                {displayData}
            </div>
        </div>
    )
}


export default TextBox_route