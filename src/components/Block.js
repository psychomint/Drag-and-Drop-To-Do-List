import { useEffect, useState } from "react"
import { Button } from "antd";
import { jsPDF } from "jspdf";


const Block = (id) => {

    const[write, setwrite] = useState("Write what You want to write");

    handleChange = (event) => {
        return (
            setwrite(event.target.value)
        )
    }
    const jspdf = new jsPDF('p','pt','a4')
    onButtonClicked = (event) => {
        const data = {
            callback:function(jspdf){   
                jspdf.save("sample.pdf")
            },
            //margin:[10,10,10,10],
            autoPaging:'text',
        }
        jspdf.html(write,data)
        
    
    }
    return(

        <div className="block" id = {id}>
            <div className="card">
                <textarea
                type="text"
                name="name"
                placeholder="Write Your Things"
                value={write}
                onChange={handleChange}
                // rows = {10}
                // cols = {40}
                maxLength={250}
                />
                <Button className="Done" 
                type="primary" 
                block
                disabled
                onClick={onButtonClicked}
                >Download as PDF</Button>
            </div>
        </div>
    )
}

export default Block;