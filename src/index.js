import React from "react"
import ReactDOM from "react-dom/client"
import Counter from "./counter"

const root=ReactDOM.createRoot(document.getElementById("root"))


root.render(
<>
<h1 style={{textAlign:'center',color:'white',marginTop:'100px'}}>Counter App</h1>
<Counter></Counter>
</>)