import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
const Applayout = () => {
    return(
        <div className="App">
            <Header/>
            <ToDoList todos={[]}/> 
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)