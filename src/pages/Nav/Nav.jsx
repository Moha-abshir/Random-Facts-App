import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaBoxesStacked } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from '../src/assets/logo.jpeg';
import './nav.css'
export default function Nav({ setIsSearchActive }) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <p>API Ninjas</p>
                </div>
                <div className="nav-icons">
                    <IoIosSearch onClick={() => setIsSearchActive(true)} />
                    <RxHamburgerMenu onClick={() => setIsSidebarVisible(true)} />
                </div>
            </nav>
            <div className={`side-bar ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
                <div className="topBar">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <p>API Ninjas</p>
                    </div>
                    <div className="cross" onClick={() => setIsSidebarVisible(false)}><RxCross2/></div>
                </div>
                <div className="menu">
                    <p>MENU</p>
                    <div className="menu-items">
                        <div className="item">
                            <FaBoxesStacked color='blue'/><NavLink to="/">Category List</NavLink> <MdKeyboardArrowRight/>
                        </div>
                        <div className="item">
                            <FaExclamationCircle color='rgb(109, 226, 109)'/><NavLink to="/about">About App</NavLink>
                        </div>
                    </div>
                </div>
                <div className="settings">
                    <p>Settings</p>
                    <div className="settings-items">
                        <div className="setting-item">
                            <div className="setting-item-left">
                                <VscColorMode color='rgba(237, 240, 52, 1)'/>
                                <span style={{color:'black'}}>Appearance</span>
                            </div>
                            <div className="modeSwitch">
                                <MdLightMode className="lightMode"/>
                                <MdOutlineDarkMode className="darkMode"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div><p>Privacy Policy</p></div>
                    <div><p>Terms of Use</p></div>
                </div>
            </div>
        </>
    )
}