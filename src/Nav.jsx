import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../src/assets/logo.jpeg';
import './nav.css'
export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <p>API Ninjas</p>
            </div>
            <div className="nav-icons">
                <IoIosSearch />
                <RxHamburgerMenu />
            </div>
        </nav>
    )
}