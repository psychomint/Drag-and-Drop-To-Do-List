import { LOGO_URL } from "../utils/constant"
import { useState } from "react";
import { Button } from "antd";
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


const Header = () => {

        const[loginbtn, setloginbtn] = useState("Login");
        const [visible, setVisible] = useState(false);

        const showDrawer = () => {
          setVisible(true);
        };
      
        const onClose = () => {
          setVisible(false);
        };
      
        return (
          <nav>
            <div className="logo">My Logo</div>
            <div className="desktop-menu">
              <Menu mode="horizontal">
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="services">Services</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
                <Menu.Item key="login"><Button type="primary" className="login" onClick = {() => {
                        loginbtn == "Login" ? setloginbtn("Logout") : setloginbtn("Login")
                    }}>{loginbtn}</Button></Menu.Item>
              </Menu>
            </div>
            <div className="mobile-menu">
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              
              <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                visible={visible}
              >
                <Menu mode="vertical">
                  <Menu.Item key="home">Home</Menu.Item>
                  <Menu.Item key="about">About</Menu.Item>
                  <Menu.Item key="services">Services</Menu.Item>
                  <Menu.Item key="contact">Contact</Menu.Item>
                  <Menu.Item key="login"><Button type="primary" className="login" onClick = {() => {
                        loginbtn == "Login" ? setloginbtn("Logout") : setloginbtn("Login")
                    }}>{loginbtn}</Button></Menu.Item>
                </Menu>
              </Drawer>
            </div>
          </nav>
        );
    
}

export default Header;