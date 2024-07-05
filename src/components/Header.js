import { LOGO_URL } from "../utils/constant"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "antd";


const Header = () => {

    const[loginbtn, setloginbtn] = useState("Login");
    console.log()
    return (
        <div className="header">
            <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <Button type="primary" className="login" onClick = {() => {
                        loginbtn == "Login" ? setloginbtn("Logout") : setloginbtn("Login")
                    }}>{loginbtn}</Button>
                </ul>

            </div>
        </div>
    )
}

export default Header;