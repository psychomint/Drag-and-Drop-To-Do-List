import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Block from "./components/Block"
import Body from "./components/Body"

const Applayout = () => {
    return(
        <div className="App">
            <Header/>
            <Body/>
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)