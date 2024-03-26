import React from "react"
import ReactDOM  from "react-dom/client"

const Applayout = () => {
    return(
        <div className="App">
            <h1> Running</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)