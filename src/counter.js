import { useState } from "react"
import "./style.css"
const Counter=()=>{
    const [count,setCount]=useState(0)

    const handleincrease=()=>{
        setCount(count+1)
    }
    const handledecrease=()=>{
        setCount(count-1)
    }
    return(<>
    <div id="main-container">
       <div id="container">  
    <h1 id="count">{count}</h1>
    <button type="button" id="btn1" onClick={handleincrease}>INC</button>
    <button type="button" id="btn2"  onClick={handledecrease}>DEC</button>
    </div>
    </div>  
    </>)

}

export default Counter