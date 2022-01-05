import {React, useState} from 'react';
import { useDoubleTap } from 'use-double-tap';


let bufferCounter = 0
let bufferArray = []
let changex = 0
let changey = 0

function TextBox_route({ isDragging, text }){
    
    const [displayData, SetdisplayData] = useState(0);
    const [counter    , setCounter    ] = useState(0);
    const [xdiff      , setxdiff      ] = useState(0);
    const [ydiff      , setydiff      ] = useState(0);

    const createTextBox=(e) => {
        bufferCounter += 1
        let x = e.screenX;
        let y = e.screenY - 70;

        bufferArray.push(<textarea 
            onDragStart={
                e=>{
                    
                }
            } 
            onDragEnd={
                e=>{
                    
                }
            } key={counter.toString()} id={counter} style={{"position": "absolute","left":`${x}px`, "top":`${y}px`}}></textarea>)
        bufferArray.map(data => <div>{data}</div>)
        SetdisplayData(bufferArray)
        setCounter(bufferCounter)
    }
    const bind = useDoubleTap((event) => {
        console.log(event.screenX)
        console.log(event.screenY)
        createTextBox(event)
    });      
    return(
        <div {...bind} style={{"height":"100vh","width":"100vw"}} onDoubleClick = {e => {createTextBox(e)}}>
            <div>
                {displayData}
            </div>
        </div>
    )
}

export default TextBox_route