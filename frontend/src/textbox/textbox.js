import {React, useState, useEffect} from 'react';
import { useDoubleTap } from 'use-double-tap';


let bufferCounter = 0
let bufferArray = []
let changex = 0
let changey = 0

function useWindowDimensions(){
    function getWIndowDimensions(){
        const {innerWidth: width, innerHeight: height} = window
        return { width, height};
    }
    const [WinDimensions, setWinDimensions] = useState(getWIndowDimensions);
    useEffect(()=> {
        function handleResize(){
            setWinDimensions(getWIndowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        
    }, []);
    return WinDimensions;
}

function TextBox_route(){
    let {height, width} = useWindowDimensions();
    const [displayData, SetdisplayData] = useState(0);
    const [counter    , setCounter    ] = useState(0);
    
    const createTextBox=(e) => {
        bufferCounter += 1
        let x = Math.abs(e.screenX);
        let y = Math.abs(e.screenY - 70);
        
        console.log(`height:${height} width:${width}`)
        console.log(`x:${x} y:${y}`)

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

        createTextBox(event)
    }); 

    return(
        
        <div {...bind} onDoubleClick={e=>{createTextBox(e)}}>
            <div  style={{"height":height,"width":width}}>
                <div>
                    width : {width} ~ height: {height}
                    {displayData}
                </div>
            </div>
        </div>
    )
}

export default TextBox_route